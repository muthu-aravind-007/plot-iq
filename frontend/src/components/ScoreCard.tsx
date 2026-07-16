import { TrendingUp } from "lucide-react";

interface ScoreCardProps {
  score: number;
  grade: string;
}

export default function ScoreCard({
  score,
  grade,
}: ScoreCardProps) {
  const getColor = () => {
    if (score >= 90) return "text-emerald-400";
    if (score >= 75) return "text-yellow-400";
    if (score >= 60) return "text-orange-400";

    return "text-red-400";
  };

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">

      <div className="mb-8 flex items-center gap-3">

        <TrendingUp className="h-6 w-6 text-emerald-400" />

        <h2 className="text-4xl font-bold">
          Property Score
        </h2>

      </div>

      <div className={`${getColor()} text-8xl font-bold`}>
        {score}
      </div>

      <p className="mb-8 text-5xl text-neutral-500">
        /100
      </p>

      <h3 className="text-2xl font-semibold text-emerald-400">
        {grade} Investment Opportunity
      </h3>

    </div>
  );
}