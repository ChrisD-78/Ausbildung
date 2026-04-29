const { loadStore } = require("./umfrage-store");

exports.handler = async (event) => {
  try {
    const qs = event.queryStringParameters || {};
    const eventId = qs.eventId || "default";
    const fragenId = qs.fragenId || "";
    if (!fragenId) {
      return {
        statusCode: 400,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ error: "Missing fragenId" }),
      };
    }

    const store = loadStore();
    const byFrage = store.answersByEvent[eventId]?.[fragenId] || {};
    const antworten = Object.values(byFrage);

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fragenId, anzahl: antworten.length, antworten }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ error: String(e?.message || e) }),
    };
  }
};

