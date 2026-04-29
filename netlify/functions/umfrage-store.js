function getStore() {
  if (!globalThis.__LAOLA_UMFRAGE_STORE__) {
    globalThis.__LAOLA_UMFRAGE_STORE__ = {
      stateByEvent: {}, // { [eventId]: aktuelleFrageId }
      answersByEvent: {}, // { [eventId]: { [fragenId]: { [teilnehmerId]: { antwort, name, teilnehmerId, fragenId, zeitpunkt } } } }
    };
  }
  return globalThis.__LAOLA_UMFRAGE_STORE__;
}

module.exports = { getStore };

