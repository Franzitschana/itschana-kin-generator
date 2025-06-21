// Einfache Zuordnung: gregorianisches Datum (ISO) → KIN-Text
const kinList = {
  "2025-06-21": "KIN 216 – Weißer spektraler Weltenüberbrücker – Ton 11"
};

// Funktion: gibt den KIN-Text für das heutige Datum zurück
export function getTodaysKin() {
  const today = new Date().toISOString().split("T")[0];
  return kinList[today] || "Noch kein Eintrag – trage dich ein, wenn dieser Tag für dich lebendig ist.";
  ;
}
