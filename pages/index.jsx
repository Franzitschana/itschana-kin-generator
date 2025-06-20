import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import kinData from "@/data/kinData.json";

export default function ItschanaKinGenerator() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const entry = kinData[date];
    if (entry) {
      setResult(entry);
    } else {
      setResult({ error: "Kein KIN für dieses Datum gefunden." });
    }
  };

 return (
  <div>
    <h1>Itschana – KIN-Generator</h1>
    <p>🌞 Der Generator ist jetzt live – Eingabe folgt im nächsten Schritt.</p>
  </div>
);
