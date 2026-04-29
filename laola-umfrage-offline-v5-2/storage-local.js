// ============================================================
// Lokales Storage-Modul (ersetzt das Netlify-Backend)
// ============================================================
// Nutzt localStorage + Storage-Events, um zwischen Tabs
// desselben Browsers in Echtzeit zu synchronisieren.
//
// Im Online-Betrieb wird dieses Modul durch Netlify Functions
// ersetzt – die HTML-Seiten bleiben unverändert.
// ============================================================

(function () {
  const KEY_STATE = "umfrage:state";
  const KEY_ANTWORTEN = "umfrage:antworten";

  function ladeAntworten() {
    try {
      return JSON.parse(localStorage.getItem(KEY_ANTWORTEN) || "{}");
    } catch (e) {
      return {};
    }
  }
  function speichereAntworten(obj) {
    localStorage.setItem(KEY_ANTWORTEN, JSON.stringify(obj));
  }

  // Simulierte API – dieselben Endpunkte wie online,
  // nur dass die Daten lokal liegen
  window.UmfrageAPI = {
    async getState() {
      return { aktuelleFrage: localStorage.getItem(KEY_STATE) || "" };
    },

    async setState(fragenId) {
      localStorage.setItem(KEY_STATE, fragenId || "");
      // Künstliches Storage-Event auch für eigenen Tab triggern
      _eigenesEvent(KEY_STATE);
      return { ok: true };
    },

    async vote(fragenId, teilnehmerId, antwort) {
      const alle = ladeAntworten();
      const key = `${fragenId}/${teilnehmerId}`;
      alle[key] = {
        fragenId,
        teilnehmerId,
        name: arguments.length >= 4 ? arguments[3] : "",
        antwort,
        zeitpunkt: new Date().toISOString(),
      };
      speichereAntworten(alle);
      _eigenesEvent(KEY_ANTWORTEN);
      return { ok: true };
    },

    async getResults(fragenId) {
      const alle = ladeAntworten();
      const antworten = Object.values(alle).filter((a) => a.fragenId === fragenId);
      return { fragenId, anzahl: antworten.length, antworten };
    },

    async resetFrage(fragenId) {
      const alle = ladeAntworten();
      let geloescht = 0;
      for (const k of Object.keys(alle)) {
        if (alle[k].fragenId === fragenId) {
          delete alle[k];
          geloescht++;
        }
      }
      speichereAntworten(alle);
      _eigenesEvent(KEY_ANTWORTEN);
      return { ok: true, geloescht };
    },

    async resetAlles() {
      localStorage.removeItem(KEY_ANTWORTEN);
      _eigenesEvent(KEY_ANTWORTEN);
      return { ok: true };
    },

    // Listener registrieren für Live-Updates (statt Polling)
    onChange(callback) {
      window.addEventListener("storage", (e) => {
        if (e.key === KEY_STATE || e.key === KEY_ANTWORTEN || e.key === null) {
          callback();
        }
      });
      // Auch eigene Events
      window.addEventListener("umfrage-change", callback);
    },
  };

  function _eigenesEvent(key) {
    // Storage-Events feuern nicht im eigenen Tab, deshalb
    // ein Custom-Event für Same-Tab-Updates
    window.dispatchEvent(new CustomEvent("umfrage-change", { detail: { key } }));
  }
})();
