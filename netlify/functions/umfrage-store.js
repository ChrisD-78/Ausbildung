const fs = require("fs");

const STORE_PATH =
  process.env.LAOLA_UMFRAGE_STORE_PATH || "/.netlify/state/laola-umfrage-store.json";

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
  const pathMod = require("path");
  try {
    const dir = pathMod.dirname(STORE_PATH);
    try {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    } catch {
      // ignore
    }
    fs.writeFileSync(STORE_PATH, JSON.stringify(store));
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e?.message || e) };
  }
}

function updateStore(mutator) {
  const store = loadStore();
  mutator(store);
  const saveRes = saveStore(store);
  return { store, saveRes };
}

module.exports = { loadStore, saveStore, updateStore };

