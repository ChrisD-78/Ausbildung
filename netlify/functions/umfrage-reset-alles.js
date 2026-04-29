const { updateStore } = require("./umfrage-store");

exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { eventId = "default" } = body || {};

    updateStore((store) => {
      if (store.answersByEvent[eventId]) delete store.answersByEvent[eventId];
      if (store.stateByEvent[eventId]) delete store.stateByEvent[eventId];
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

