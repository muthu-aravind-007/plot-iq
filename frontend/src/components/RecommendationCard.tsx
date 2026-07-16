import {
  CheckCircle,
  XCircle,
} from "lucide-react";

interface RecommendationProps {

  recommendations: {
    pros: string[];
    cons: string[];
    recommendation: string;
  };
}

export default function RecommendationCard({
  recommendations,
}: RecommendationProps) {

  return (
    <div className="rounded-3xl bg-neutral-900 p-8">

      <h2 className="mb-8 text-3xl font-bold">
        Recommendations
      </h2>

      <div className="grid gap-10 lg:grid-cols-2">

        <div>

          <h3 className="mb-5 text-xl font-semibold text-emerald-400">
            Pros
          </h3>

          <div className="space-y-4">

            {recommendations.pros.map((pro) => (

              <div
                key={pro}
                className="flex gap-3"
              >
                <CheckCircle
                  className="mt-1 text-emerald-400"
                />

                <p>{pro}</p>

              </div>

            ))}

          </div>

        </div>

        <div>

          <h3 className="mb-5 text-xl font-semibold text-red-400">
            Cons
          </h3>

          <div className="space-y-4">

            {recommendations.cons.map((con) => (

              <div
                key={con}
                className="flex gap-3"
              >

                <XCircle
                  className="mt-1 text-red-400"
                />

                <p>{con}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="mt-10 rounded-xl bg-emerald-950 p-6">

        <h3 className="mb-3 text-xl font-semibold">
          Final Recommendation
        </h3>

        <p>
          {recommendations.recommendation}
        </p>

      </div>

    </div>
  );
}