import { TrendingUp } from "lucide-react";

interface Props {
  score: number;
}

export default function ScoreCard({ score }: Props) {
  let status = "Poor";
  let color = "text-red-500";

  if (score >= 85) {
    status = "Excellent";
    color = "text-emerald-400";
  } else if (score >= 70) {
    status = "Good";
    color = "text-yellow-400";
  } else if (score >= 50) {
    status = "Average";
    color = "text-orange-400";
  }

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">

      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-6 w-6 text-emerald-400" />
        <h2 className="text-2xl font-bold">
          Property Score
        </h2>
      </div>

      <div className={`text-7xl font-black ${color}`}>
        {score}
      </div>

      <div className="text-3xl text-neutral-500">
        /100
      </div>

      <p className={`mt-6 text-xl font-semibold ${color}`}>
        {status} Investment Opportunity
      </p>

    </div>
  );
}