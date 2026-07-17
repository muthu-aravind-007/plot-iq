import type { PropertyResponse } from "../types/property";

import ScoreCard from "./ScoreCard";
import RiskBadge from "./RiskBadge";
import SummaryCard from "./SummaryCard";
import RecommendationCard from "./RecommendationCard";
import InvestmentCard from "./InvestmentCard";
import SourceCard from "./SourceCard";

import PropertyMap from "./PropertyMap";
import PropertyFactsCard from "./PropertyFactsCard";
import EnvironmentCard from "./EnvironmentCard";
import ScoreBreakdownCard from "./ScoreBreakdownCard";
import DownloadReport from "./DownloadReport";

interface Props {
  result: PropertyResponse;
  onReset: () => void;
}

export default function PropertyResult({
  result,
  onReset,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-6 py-16">

      {/* Back Button */}

      <button
        onClick={onReset}
        className="rounded-lg bg-neutral-900 px-5 py-3 transition hover:bg-neutral-800"
      >
        ← Analyze Another Property
      </button>

      {/* Score */}

      <ScoreCard
        score={result.property_score}
        grade={result.grade}
      />

      {/* Property Map */}

      <PropertyMap
        lat={result.property.lat}
        lng={result.property.lng}
      />

      {/* Risk Cards */}

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

      {/* Facts + Environment */}

      <div className="grid gap-6 lg:grid-cols-2">

        <PropertyFactsCard
          property={result.property}
        />

        <EnvironmentCard
          property={result.property}
        />

      </div>

      {/* Score Breakdown */}

      <ScoreBreakdownCard
        score={result.property_score}
        breakdown={result.breakdown}
      />

      {/* Investment */}

      <InvestmentCard
        score={result.property_score}
      />

      {/* Summary */}

      <SummaryCard
        summary={result.summary}
      />

      {/* Recommendations */}

      <RecommendationCard
        recommendations={result.recommendations}
      />

      {/* Sources */}

      <SourceCard
        sources={result.sources}
      />

      {/* PDF */}

      <DownloadReport />

    </section>
  );
}