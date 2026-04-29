const fs = require("fs");

const STORE_PATH =
  process.env.LAOLA_UMFRAGE_STORE_PATH || "/tmp/laola-umfrage-store.json";

function defaultStore() {
  return {
    stateByEvent: {}, // { [eventId]: aktuelleFrageId }
    answersByEvent: {}, // { [eventId]: { [fragenId]: { [teilnehmerId]: { antwort, name, teilnehmerId, fragenId, zeitpunkt } } } }
  };
}

function loadStore() {
  try {
    if (!fs.existsSync(STORE_PATH)) return defaultStore();
    const raw = fs.readFileSync(STORE_PATH, "utf8");
    if (!raw) return defaultStore();
    return JSON.parse(raw);
  } catch {
    return defaultStore();
  }
}

function saveStore(store) {
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(store));
  } catch (e) {
    // Wenn Schreibzugriff nicht klappt, machen wir wenigstens nicht komplett kaputt.
  }
}

function updateStore(mutator) {
  const store = loadStore();
  mutator(store);
  saveStore(store);
  return store;
}

module.exports = { loadStore, saveStore, updateStore };

