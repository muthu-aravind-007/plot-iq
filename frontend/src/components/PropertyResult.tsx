import type { PropertyResponse } from "../types/property";

import ScoreCard from "./ScoreCard";
import RiskBadge from "./RiskBadge";
import SummaryCard from "./SummaryCard";
import SourceCard from "./SourceCard";

interface Props {
  result: PropertyResponse;
  onReset: () => void;
}

export default function PropertyResult({
  result,
  onReset,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl space-y-8 px-6 py-16">

      <button
        onClick={onReset}
        className="rounded-lg bg-neutral-900 px-5 py-3 hover:bg-neutral-800"
      >
        ← Analyze Another Property
      </button>

      <ScoreCard score={result.property_score} />

      <div className="grid gap-5 md:grid-cols-3">

        <RiskBadge
          title="Terrain"
          value={result.terrain}
        />

        <RiskBadge
          title="Flood Risk"
          value={result.flood_risk}
        />

        <RiskBadge
          title="Utilities"
          value={result.utilities}
        />

      </div>

      <SummaryCard summary={result.summary} />

      <SourceCard />

    </section>
  );
}