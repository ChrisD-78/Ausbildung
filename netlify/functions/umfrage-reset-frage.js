const { updateStore } = require("./umfrage-store");

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

    updateStore((store) => {
      const byEvent = store.answersByEvent[eventId];
      if (byEvent && byEvent[fragenId]) delete byEvent[fragenId];
    });

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

