import {
  Sparkles,
  Brain,
  ShieldCheck,
} from "lucide-react";

interface SummaryCardProps {
  summary: string;
}

export default function SummaryCard({
  summary,
}: SummaryCardProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 shadow-xl">

      {/* Top Accent */}

      <div className="h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />

      <div className="p-8">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-emerald-500/10 p-4">

              <Brain
                className="text-emerald-400"
                size={28}
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Executive Summary
              </h2>

              <p className="mt-1 text-neutral-400">
                Generated using Mireye geospatial intelligence
              </p>

            </div>

          </div>

          <div className="hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 md:flex md:items-center md:gap-2">

            <Sparkles
              size={18}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium text-emerald-300">
              Automated Analysis
            </span>

          </div>

        </div>

        {/* Summary */}

        <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-7">

          <p className="text-lg leading-9 text-neutral-300">
            {summary}
          </p>

        </div>

        {/* Footer */}

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-3">

            <ShieldCheck
              className="text-cyan-400"
              size={22}
            />

            <div>

              <h3 className="font-semibold">
                Assessment Complete
              </h3>

              <p className="text-sm text-neutral-400">
                Based on terrain, flood risk, wetlands,
                elevation and geospatial datasets.
              </p>

            </div>

          </div>

          <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            Verified Analysis
          </div>

        </div>

      </div>

    </section>
  );
}