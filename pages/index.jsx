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
  <div className="max-w-md mx-auto mt-10 space-y-6">
    <h1 className="text-2xl font-bold text-center">Itschana – KIN-Generator</h1>

    <div className="text-center text-sm text-gray-600">
      <p>🔍 Die öffentliche Vorschau zeigt das KIN für jedes gewünschte Datum.</p>
    </div>

    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="border rounded p-2 w-full"
    />
    <button onClick={handleCheck} className="bg-blue-500 text-white px-4 py-2 rounded">
      KIN anzeigen
    </button>

    {result && (
      <div className="mt-4 p-4 border rounded">
        {result.error ? (
          <p className="text-red-600">{result.error}</p>
        ) : (
          <div>
            <p><strong>KIN:</strong> {result.kin}</p>
            <p><strong>Name:</strong> {result.name}</p>
            <p><strong>Ton:</strong> {result.tone}</p>
            <p><strong>🔗 Link:</strong> <a href={result.link} className="text-blue-600 underline" target="_blank">öffnen</a></p>
          </div>
        )}
      </div>
    )}
  </div>
);
