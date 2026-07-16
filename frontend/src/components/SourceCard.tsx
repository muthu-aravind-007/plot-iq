import {
  ShieldCheck,
  Database,
} from "lucide-react";

interface Props {
  sources: any;
}

export default function SourceCard({
  sources,
}: Props) {

  const uniqueSources = [
    ...new Map(
      Object.values(sources).map(
        (item: any) => [item.source, item]
      )
    ).values(),
  ];

  return (
    <div className="rounded-3xl bg-neutral-900 p-8">

      <div className="mb-8 flex items-center gap-3">

        <Database className="text-emerald-400" />

        <h2 className="text-3xl font-bold">
          Trusted Data Sources
        </h2>

      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {uniqueSources.map((source: any) => (

          <div
            key={source.source}
            className="rounded-2xl bg-neutral-800 p-6 text-center"
          >

            <ShieldCheck
              className="mx-auto mb-4 text-emerald-400"
            />

            <p className="font-semibold">
              {source.source}
            </p>

          </div>

        ))}

      </div>

      <p className="mt-8 text-neutral-500">
        🌍 Data powered by Mireye Earth
      </p>

    </div>
  );
}