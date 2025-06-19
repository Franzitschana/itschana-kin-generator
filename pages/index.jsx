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
        <p>Die öffentliche Vorschau zeigt das KIN für jedes gewünschte Datum.</p>
        <p>Für die vollständige Datei (KIN-Zeitlinie) ist ein Beitrag oder eine Spende erbeten.</p>
        <p>Kontakt: <a href="mailto:postmaster@verein-reset.info" className="text-blue-600 underline">postmaster@verein-reset.info</a></p>
        <p>Spendenkonto: Bitte per E-Mail anfragen.</p>
      </div>

      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button onClick={handleCheck}>KIN anzeigen</Button>

      {result && (
        <Card>
          <CardContent className="p-4">
            {result.error ? (
              <p className="text-red-500">{result.error}</p>
            ) : (
              <div>
                <p><strong>KIN:</strong> {result.kin}</p>
                <p><strong>Name:</strong> {result.name}</p>
                <p><strong>Ton:</strong> {result.ton}</p>
                <a href={result.link} target="_blank" className="text-blue-600 underline">Zur Tagesseite</a>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
