const { getStore } = require("./umfrage-store");

exports.handler = async (event) => {
  try {
    const qs = event.queryStringParameters || {};
    const eventId = qs.eventId || "default";
    const store = getStore();
    const aktuelleFrage = store.stateByEvent[eventId] || "";

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ aktuelleFrage }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error: String(e?.message || e) }),
    };
  }
};

