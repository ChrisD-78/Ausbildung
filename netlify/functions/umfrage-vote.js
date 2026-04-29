const { updateStore } = require("./umfrage-store");

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
    const { eventId = "default", fragenId, teilnehmerId, antwort, name = "" } = body || {};
    if (!fragenId || !teilnehmerId) {
      return {
        statusCode: 400,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ error: "Missing fragenId/teilnehmerId" }),
      };
    }

    const zeitpunkt = new Date().toISOString();
    updateStore((store) => {
      if (!store.answersByEvent[eventId]) store.answersByEvent[eventId] = {};
      if (!store.answersByEvent[eventId][fragenId])
        store.answersByEvent[eventId][fragenId] = {};

      store.answersByEvent[eventId][fragenId][teilnehmerId] = {
        fragenId,
        teilnehmerId,
        name,
        antwort,
        zeitpunkt,
      };
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

