const { updateStore, loadStore } = require("./umfrage-store");

exports.handler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ error: "Missing body" }),
      };
    }

    const body = JSON.parse(event.body);
    const { eventId = "default", aktuelleFrage = "" } = body || {};

    // Laden/Schreiben über File-Persistence
    updateStore((store) => {
      store.stateByEvent[eventId] = aktuelleFrage;
    });
    const verifyStore = loadStore();
    const verifyAktuelleFrage = verifyStore.stateByEvent[eventId] || "";

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ok: true,
        verify: { eventId, aktuelleFrage: verifyAktuelleFrage },
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error: String(e?.message || e) }),
    };
  }
};

