import {
  Database,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function SourceCard() {
  const sources = [
    "USGS",
    "NOAA",
    "FEMA",
    "USFWS",
  ];

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <div className="mb-5 flex items-center gap-3">
        <Database className="text-emerald-400" />

        <h3 className="text-xl font-bold">
          Trusted Data Sources
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {sources.map((source) => (
          <div
            key={source}
            className="rounded-xl bg-neutral-800 p-4 text-center"
          >
            <ShieldCheck className="mx-auto mb-2 text-emerald-400" />

            <p>{source}</p>
          </div>
        ))}

      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
        <Globe size={16} />
        Data powered by Mireye Earth
      </div>

    </div>
  );
}