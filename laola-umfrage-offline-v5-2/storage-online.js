// ============================================================
// Online-Storage-Modul (Netlify Functions)
// ============================================================
// Ermöglicht Synchronisation zwischen Beamer und Handy
// über einen kleinen HTTP-API-Backend.
//
// Hinweis:
// Die Speicherung passiert in einem In-Memory Store der Netlify
// Function. Das ist für Live-Durchläufe praktisch, aber bei
// Function-Cold-Starts kann es zurückgesetzt werden.
// ============================================================

(function () {
  const eventId = (window.VERANSTALTUNG && window.VERANSTALTUNG.eventId) || "default";
  let offlineMode = false;

  // Fallback für lokale Tests (kein Netlify-Backend verfügbar).
  const KEY_STATE = "umfrage:state";
  const KEY_ANTWORTEN = "umfrage:antworten";

  function ladeAntwortenLocal() {
    try {
      return JSON.parse(localStorage.getItem(KEY_ANTWORTEN) || "{}");
    } catch {
      return {};
    }
  }

  function speichereAntwortenLocal(obj) {
    localStorage.setItem(KEY_ANTWORTEN, JSON.stringify(obj));
  }

  async function localGetState() {
    return { aktuelleFrage: localStorage.getItem(KEY_STATE) || "" };
  }

  async function localSetState(fragenId) {
    localStorage.setItem(KEY_STATE, fragenId || "");
    return { ok: true };
  }

  async function localVote(fragenId, teilnehmerId, antwort, name) {
    const alle = ladeAntwortenLocal();
    const key = `${fragenId}/${teilnehmerId}`;
    alle[key] = {
      fragenId,
      teilnehmerId,
      name: name || "",
      antwort,
      zeitpunkt: new Date().toISOString(),
    };
    speichereAntwortenLocal(alle);
    return { ok: true };
  }

  async function localGetResults(fragenId) {
    const alle = ladeAntwortenLocal();
    const antworten = Object.values(alle).filter((a) => a.fragenId === fragenId);
    return { fragenId, anzahl: antworten.length, antworten };
  }

  async function localResetFrage(fragenId) {
    const alle = ladeAntwortenLocal();
    for (const k of Object.keys(alle)) {
      if (alle[k].fragenId === fragenId) delete alle[k];
    }
    speichereAntwortenLocal(alle);
    return { ok: true };
  }

  async function localResetAlles() {
    localStorage.removeItem(KEY_ANTWORTEN);
    localStorage.removeItem(KEY_STATE);
    return { ok: true };
  }

  async function jsonFetch(url, options = {}) {
    const res = await fetch(url, options);
    const text = await res.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = {};
    }
    if (!res.ok) {
      const msg = data?.error || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    return data;
  }

  window.UmfrageAPI = {
    async getState() {
      if (offlineMode) return localGetState();
      try {
        return await jsonFetch(
          `/.netlify/functions/umfrage-get-state?eventId=${encodeURIComponent(eventId)}`
        );
      } catch (e) {
        offlineMode = true;
        return localGetState();
      }
    },

    async setState(fragenId) {
      if (offlineMode) return localSetState(fragenId);
      try {
        await jsonFetch(`/.netlify/functions/umfrage-set-state`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ eventId, aktuelleFrage: fragenId || "" }),
        });
        return { ok: true };
      } catch (e) {
        offlineMode = true;
        return localSetState(fragenId);
      }
    },

    async vote(fragenId, teilnehmerId, antwort, name = "") {
      if (offlineMode) return localVote(fragenId, teilnehmerId, antwort, name);
      try {
        await jsonFetch(`/.netlify/functions/umfrage-vote`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            eventId,
            fragenId,
            teilnehmerId,
            antwort,
            name: name || "",
          }),
        });
        return { ok: true };
      } catch (e) {
        offlineMode = true;
        return localVote(fragenId, teilnehmerId, antwort, name);
      }
    },

    async getResults(fragenId) {
      if (offlineMode) return localGetResults(fragenId);
      try {
        return await jsonFetch(
          `/.netlify/functions/umfrage-get-results?eventId=${encodeURIComponent(eventId)}&fragenId=${encodeURIComponent(
            fragenId
          )}`
        );
      } catch (e) {
        offlineMode = true;
        return localGetResults(fragenId);
      }
    },

    async resetFrage(fragenId) {
      if (offlineMode) return localResetFrage(fragenId);
      try {
        await jsonFetch(`/.netlify/functions/umfrage-reset-frage`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ eventId, fragenId }),
        });
        return { ok: true };
      } catch (e) {
        offlineMode = true;
        return localResetFrage(fragenId);
      }
    },

    async resetAlles() {
      if (offlineMode) return localResetAlles();
      try {
        await jsonFetch(`/.netlify/functions/umfrage-reset-alles`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ eventId }),
        });
        return { ok: true };
      } catch (e) {
        offlineMode = true;
        return localResetAlles();
      }
    },

    // Präsentation/Handy verwenden ohnehin setInterval -> Polling.
    onChange() {},
  };
})();

