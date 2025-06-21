import { getTodaysKin } from '../data/kinData';

export default function HomeText() {
  const todayKin = getTodaysKin();
  
  return (
    <>
      <h1>Itschana – KIN-Generator</h1>
    <p>{todayKin}</p>     
      <p>Diese Seite wird gerade neu aufgebaut – mit Klarheit, Liebe und Struktur.</p>
    </>
  );
}
