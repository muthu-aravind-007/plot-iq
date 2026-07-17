import {
  Mountain,
  Waves,
  Trees,
  ShieldAlert,
  Leaf,
} from "lucide-react";

interface Props {
  property: {
    elevation: number;
    coast_distance: number;
    wetland: boolean;
    floodplain: boolean;
  };
}

export default function EnvironmentCard({
  property,
}: Props) {

  const floodRisk = property.floodplain
    ? "High"
    : property.elevation < 10
    ? "Medium"
    : "Low";

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-xl">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-emerald-500/10 p-3">

          <Leaf
            className="text-emerald-400"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Environmental Analysis
          </h2>

          <p className="text-neutral-400">
            AI environmental risk assessment
          </p>

        </div>

      </div>

      <div className="space-y-5">

        <Row
          icon={<Mountain size={22} />}
          title="Elevation"
          value={`${property.elevation.toFixed(1)} meters`}
          status={
            property.elevation >= 15
              ? "Excellent"
              : property.elevation >= 10
              ? "Moderate"
              : "Low"
          }
          good={property.elevation >= 10}
        />

        <Row
          icon={<Waves size={22} />}
          title="Distance to Coast"
          value={`${property.coast_distance.toFixed(0)} meters`}
          status={
            property.coast_distance > 1000
              ? "Safe"
              : "Near Coast"
          }
          good={property.coast_distance > 1000}
        />

        <Row
          icon={<ShieldAlert size={22} />}
          title="Floodplain"
          value={
            property.floodplain
              ? "Inside FEMA Zone"
              : "Outside FEMA Zone"
          }
          status={
            property.floodplain
              ? "Warning"
              : "Safe"
          }
          good={!property.floodplain}
        />

        <Row
          icon={<Trees size={22} />}
          title="Wetlands"
          value={
            property.wetland
              ? "Present"
              : "Not Detected"
          }
          status={
            property.wetland
              ? "Review"
              : "Clear"
          }
          good={!property.wetland}
        />

      </div>

      {/* Overall Risk */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <p className="text-sm uppercase tracking-widest text-neutral-500">
          Overall Environmental Risk
        </p>

        <h3
          className={`mt-3 text-3xl font-bold ${
            floodRisk === "Low"
              ? "text-emerald-400"
              : floodRisk === "Medium"
              ? "text-yellow-400"
              : "text-red-400"
          }`}
        >
          {floodRisk}
        </h3>

        <p className="mt-3 leading-7 text-neutral-400">
          This assessment combines floodplain,
          elevation, wetlands and coastal proximity
          to estimate environmental exposure.
        </p>

      </div>

    </section>
  );
}

interface RowProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  status: string;
  good: boolean;
}

function Row({
  icon,
  title,
  value,
  status,
  good,
}: RowProps) {

  return (

    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/60 p-5 transition-all duration-300 hover:border-emerald-500/30">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">

          {icon}

        </div>

        <div>

          <p className="text-sm uppercase tracking-wide text-neutral-500">
            {title}
          </p>

          <h3 className="mt-1 font-semibold">
            {value}
          </h3>

        </div>

      </div>

      <span
        className={`rounded-full px-4 py-2 text-sm font-semibold ${
          good
            ? "bg-emerald-500/15 text-emerald-300"
            : "bg-red-500/15 text-red-300"
        }`}
      >
        {status}
      </span>

    </div>

  );
}