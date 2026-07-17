import {
  Award,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

interface ScoreCardProps {
  score: number;
  grade: string;
}

export default function ScoreCard({
  score,
  grade,
}: ScoreCardProps) {

  const getColor = () => {
    if (score >= 90)
      return {
        text: "text-emerald-400",
        ring: "stroke-emerald-400",
        badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      };

    if (score >= 75)
      return {
        text: "text-yellow-400",
        ring: "stroke-yellow-400",
        badge: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
      };

    if (score >= 60)
      return {
        text: "text-orange-400",
        ring: "stroke-orange-400",
        badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
      };

    return {
      text: "text-red-400",
      ring: "stroke-red-400",
      badge: "bg-red-500/15 text-red-300 border-red-500/30",
    };
  };

  const color = getColor();

  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (score / 100) * circumference;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-10 shadow-2xl">

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <div className="mb-6 flex items-center gap-3">

            <TrendingUp className="text-emerald-400" />

            <h2 className="text-4xl font-bold">
              Property Score
            </h2>

          </div>

          <p className="max-w-lg text-lg leading-8 text-neutral-400">

            PlotIQ evaluates this property using
            geospatial intelligence, environmental
            risk, terrain analysis and flood
            assessment powered by Mireye.

          </p>

          <div
            className={`mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${color.badge}`}
          >
            <Award size={18} />

            {grade} Investment

          </div>

          <div className="mt-8 flex items-center gap-4">

            <ShieldCheck className="text-emerald-400" />

            <div>

              <p className="text-sm text-neutral-500">
                Investment Confidence
              </p>

              <h3 className="text-2xl font-semibold">
                {score >= 90
                  ? "Excellent"
                  : score >= 75
                  ? "Very Strong"
                  : score >= 60
                  ? "Moderate"
                  : "High Risk"}
              </h3>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">
          <div className="relative h-72 w-72">

            <svg
              width="288"
              height="288"
              className="-rotate-90"
            >
              {/* Background Ring */}

              <circle
                cx="144"
                cy="144"
                r={radius}
                stroke="#262626"
                strokeWidth="14"
                fill="none"
              />

              {/* Progress Ring */}

              <circle
                cx="144"
                cy="144"
                r={radius}
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                className={color.ring}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className={`text-7xl font-black ${color.text}`}>
                {score}
              </span>

              <span className="mt-2 text-lg text-neutral-500">
                out of 100
              </span>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}