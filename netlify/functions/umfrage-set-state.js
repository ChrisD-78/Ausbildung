const { getStore } = require("./umfrage-store");

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

    const store = getStore();
    store.stateByEvent[eventId] = aktuelleFrage;

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error: String(e?.message || e) }),
    };
  }
};

