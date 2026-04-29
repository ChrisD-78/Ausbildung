const { getStore } = require("./umfrage-store");

exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { eventId = "default", fragenId } = body || {};
    if (!fragenId) {
      return {
        statusCode: 400,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ error: "Missing fragenId" }),
      };
    }

    const store = getStore();
    const byEvent = store.answersByEvent[eventId];
    if (byEvent?.[fragenId]) {
      delete byEvent[fragenId];
    }

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

