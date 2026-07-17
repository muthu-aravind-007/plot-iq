import {
  CheckCircle2,
  TriangleAlert,
  Sparkles,
} from "lucide-react";

import type { Recommendation } from "../types/property";

interface RecommendationProps {
  recommendations: Recommendation;
}

export default function RecommendationCard({
  recommendations,
}: RecommendationProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-xl">

      {/* Header */}

      <div className="mb-10 flex items-center gap-3">

        <div className="rounded-xl bg-emerald-500/10 p-3">

          <Sparkles
            className="text-emerald-400"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            AI Recommendations
          </h2>

          <p className="mt-1 text-neutral-400">
            Investment strengths, risks, and final guidance.
          </p>

        </div>

      </div>

      {/* Pros & Cons */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Pros */}

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-emerald-400">

            <CheckCircle2 size={22} />

            Advantages

          </h3>

          <div className="space-y-4">

            {recommendations.pros.map((pro) => (

              <div
                key={pro}
                className="flex items-start gap-3 rounded-xl bg-neutral-900/70 p-4"
              >

                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <p className="leading-7 text-neutral-200">
                  {pro}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Cons */}

        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-red-400">

            <TriangleAlert size={22} />

            Risks

          </h3>

          <div className="space-y-4">

            {recommendations.cons.length === 0 ? (

              <div className="rounded-xl bg-neutral-900/70 p-4">

                <p className="text-neutral-300">
                  No significant environmental risks detected.
                </p>

              </div>

            ) : (

              recommendations.cons.map((con) => (

                <div
                  key={con}
                  className="flex items-start gap-3 rounded-xl bg-neutral-900/70 p-4"
                >

                  <TriangleAlert
                    size={20}
                    className="mt-0.5 shrink-0 text-red-400"
                  />

                  <p className="leading-7 text-neutral-200">
                    {con}
                  </p>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

      {/* Final Recommendation */}

      <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-600/15 via-emerald-500/10 to-cyan-500/10 p-8">

        <div className="mb-4 flex items-center gap-3">

          <Sparkles
            className="text-emerald-400"
            size={22}
          />

          <h3 className="text-2xl font-bold">
            Final Recommendation
          </h3>

        </div>

        <p className="text-lg leading-8 text-neutral-200">
          {recommendations.final}
        </p>

      </div>

    </section>
  );
}