import {
  BarChart3,
  Waves,
  Trees,
  Mountain,
  ShieldAlert,
  Trophy,
} from "lucide-react";

interface Props {
  breakdown: {
    floodplain: number;
    wetlands: number;
    elevation: number;
    coast: number;
  };

  score: number;
}

export default function ScoreBreakdownCard({
  breakdown,
  score,
}: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-xl">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-cyan-500/10 p-3">

          <BarChart3
            className="text-cyan-400"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Score Breakdown
          </h2>

          <p className="text-neutral-400">
            Understand how the investment score was calculated.
          </p>

        </div>

      </div>

      <BreakdownRow
        icon={<ShieldAlert size={20} />}
        label="Floodplain"
        deduction={breakdown.floodplain}
        color="bg-red-500"
      />

      <BreakdownRow
        icon={<Trees size={20} />}
        label="Wetlands"
        deduction={breakdown.wetlands}
        color="bg-yellow-500"
      />

      <BreakdownRow
        icon={<Mountain size={20} />}
        label="Elevation"
        deduction={breakdown.elevation}
        color="bg-orange-500"
      />

      <BreakdownRow
        icon={<Waves size={20} />}
        label="Coast Distance"
        deduction={breakdown.coast}
        color="bg-cyan-500"
      />

      <div className="my-8 border-t border-white/10" />

      <div className="flex items-center justify-between rounded-2xl bg-emerald-500/10 p-6">

        <div className="flex items-center gap-3">

          <Trophy
            className="text-emerald-400"
            size={24}
          />

          <div>

            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Final Property Score
            </p>

            <h3 className="text-3xl font-bold">
              {score}/100
            </h3>

          </div>

        </div>

        <div className="text-right">

          <p className="text-sm text-neutral-400">
            Overall Rating
          </p>

          <p className="text-2xl font-bold text-emerald-400">
            {score >= 90
              ? "Excellent"
              : score >= 75
              ? "Very Good"
              : score >= 60
              ? "Good"
              : "High Risk"}
          </p>

        </div>

      </div>

    </section>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  deduction: number;
  color: string;
}

function BreakdownRow({
  icon,
  label,
  deduction,
  color,
}: RowProps) {

  const width = (deduction / 30) * 100;

  return (

    <div className="mb-8">

      <div className="mb-3 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-neutral-800 p-2 text-neutral-300">

            {icon}

          </div>

          <span className="font-semibold">
            {label}
          </span>

        </div>

        <span
          className={`font-bold ${
            deduction === 0
              ? "text-emerald-400"
              : "text-red-400"
          }`}
        >
          {deduction === 0 ? "No Impact" : `-${deduction}`}
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-neutral-800">

        <div
          className={`${color} h-full rounded-full transition-all duration-1000`}
          style={{
            width: `${width}%`,
          }}
        />

      </div>

    </div>

  );
}