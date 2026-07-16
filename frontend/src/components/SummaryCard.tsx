import { Sparkles } from "lucide-react";

interface SummaryCardProps {
  summary: string;
}

export default function SummaryCard({
  summary,
}: SummaryCardProps) {
  return (
    <div className="rounded-3xl bg-neutral-900 p-8">

      <div className="mb-6 flex items-center gap-3">

        <Sparkles className="text-emerald-400" />

        <h2 className="text-3xl font-bold">
          AI Summary
        </h2>

      </div>

      <p className="text-lg leading-9 text-neutral-300">
        {summary}
      </p>

    </div>
  );
}