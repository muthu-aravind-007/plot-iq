import {
  ShieldCheck,
  Database,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

interface Props {
  sources: Record<string, any>;
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

    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-xl">

      {/* Header */}

      <div className="mb-10 flex items-center gap-3">

        <div className="rounded-xl bg-emerald-500/10 p-3">

          <Database
            className="text-emerald-400"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Trusted Data Sources
          </h2>

          <p className="text-neutral-400">
            Every insight is backed by verified geospatial datasets.
          </p>

        </div>

      </div>

      {/* Sources */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {uniqueSources.map((source: any) => (

          <div
            key={source.source}
            className="group rounded-2xl border border-white/10 bg-neutral-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
          >

            <div className="mb-5 flex items-center justify-between">

              <div className="rounded-xl bg-emerald-500/10 p-3">

                <ShieldCheck
                  className="text-emerald-400"
                  size={24}
                />

              </div>

              <BadgeCheck
                className="text-emerald-400"
                size={22}
              />

            </div>

            <h3 className="text-lg font-bold">
              {source.source}
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
              Verified Government / Scientific Dataset
            </p>

            {source.confidence && (

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-neutral-500">
                  Confidence
                </span>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold capitalize text-emerald-300">
                  {source.confidence}
                </span>

              </div>

            )}

            {source.source_url && (

              <a
                href={source.source_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
              >

                View Dataset

                <ExternalLink size={16} />

              </a>

            )}

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-emerald-400"
            size={22}
          />

          <div>

            <h3 className="font-semibold">
              Powered by Mireye Earth
            </h3>

            <p className="mt-1 text-sm text-neutral-400">
              Property intelligence generated using trusted USGS,
              FEMA, NOAA, USFWS and other authoritative geospatial
              datasets through the Mireye platform.
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}