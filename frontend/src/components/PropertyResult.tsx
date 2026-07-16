import { Button } from "./ui/button";
import type { PropertyResponse } from "../types/property";

interface Props {
  result: PropertyResponse;
  onBack: () => void;
}

export default function PropertyResult({
  result,
  onBack,
}: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">

      <Button
        variant="outline"
        onClick={onBack}
      >
        ← Analyze Another Property
      </Button>

      <div className="mt-10 rounded-xl border border-neutral-800 p-8">

        <h1 className="text-4xl font-bold">
          Property Score
        </h1>

        <h2 className="mt-6 text-6xl font-bold text-emerald-400">
          {result.property_score}/100
        </h2>

        <div className="mt-10 space-y-3">

          <p>
            <strong>Terrain:</strong> {result.terrain}
          </p>

          <p>
            <strong>Flood Risk:</strong> {result.flood_risk}
          </p>

          <p>
            <strong>Utilities:</strong> {result.utilities}
          </p>

        </div>

        <div className="mt-8 rounded-lg bg-neutral-900 p-6">

          <h3 className="mb-3 text-lg font-semibold">
            AI Summary
          </h3>

          <p>{result.summary}</p>

        </div>

      </div>

    </section>
  );
}