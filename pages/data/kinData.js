// Einfache Zuordnung: gregorianisches Datum (ISO) → KIN-Text
const kinList = {
  "2025-06-21": "KIN 216 – Weißer spektraler Weltenüberbrücker – Ton 11",
  "2025-06-22": "KIN 217 – Blauer kristaller Adler – Ton 12",
  "2025-06-23": "KIN 218 – Gelber kosmischer Krieger – Ton 13",
  // … weitere Einträge folgen später
};

// Funktion: gibt den KIN-Text für das heutige Datum zurück
export function getTodaysKin() {
  const today = new Date().toISOString().split("T")[0];
  return kinList[today] || "KIN nicht gefunden – Liste unvollständig";
}
