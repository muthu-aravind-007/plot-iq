import { ArrowLeft, MapPinned, ShieldCheck } from "lucide-react";

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
    <section className="mx-auto max-w-7xl animate-in fade-in duration-700 space-y-10 px-6 py-10">

      {/* Header */}

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <button
          onClick={onReset}
          className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10"
        >
          <ArrowLeft size={18} />
          Analyze Another Property
        </button>

        <div className="text-right">

          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            PlotIQ Analysis
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            Property Intelligence Report
          </h2>

        </div>

      </div>

      {/* Score */}

      <ScoreCard
        score={result.property_score}
        grade={result.grade}
      />

      {/* Map */}

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <MapPinned className="text-emerald-400" size={22} />

          <div>

            <h3 className="text-2xl font-semibold">
              Property Location
            </h3>

            <p className="text-sm text-neutral-500">
              Interactive location based on Mireye geospatial data
            </p>

          </div>

        </div>

        <PropertyMap
          lat={result.property.lat}
          lng={result.property.lng}
        />

      </div>

      {/* Risk Overview */}

      <div className="space-y-5">

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={22}
            className="text-emerald-400"
          />

          <div>

            <h3 className="text-2xl font-semibold">
              Risk Overview
            </h3>

            <p className="text-sm text-neutral-500">
              Environmental indicators affecting investment quality
            </p>

          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

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

      </div>

      {/* Facts */}

      <div className="grid gap-8 lg:grid-cols-2">

        <PropertyFactsCard
          property={result.property}
        />

        <EnvironmentCard
          property={result.property}
        />

      </div>

      {/* Breakdown */}

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

      {/* Recommendation */}

      <RecommendationCard
        recommendations={result.recommendations}
      />

      {/* Sources */}

      <SourceCard
        sources={result.sources}
      />

      {/* Download */}

      <DownloadReport />

    </section>
  );
}