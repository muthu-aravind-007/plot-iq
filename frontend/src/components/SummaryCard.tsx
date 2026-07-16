import { Sparkles } from "lucide-react";

interface Props {
  summary: string;
}

export default function SummaryCard({
  summary,
}: Props) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <div className="mb-4 flex items-center gap-3">
        <Sparkles className="text-emerald-400" />
        <h3 className="text-xl font-bold">
          AI Summary
        </h3>
      </div>

      <p className="leading-8 text-neutral-300">
        {summary}
      </p>

    </div>
  );
}