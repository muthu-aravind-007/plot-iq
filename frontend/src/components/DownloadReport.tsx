import {
  Download,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function DownloadReport() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950/30 to-neutral-900 p-8 shadow-xl">

      {/* Header */}

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-emerald-500/10 p-4">

            <FileText
              className="text-emerald-400"
              size={30}
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Export Property Report
            </h2>

            <p className="mt-2 text-neutral-400">
              Download a professionally formatted PDF containing
              the complete property analysis.
            </p>

          </div>

        </div>

        <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 md:flex">

          <Sparkles
            className="text-emerald-400"
            size={18}
          />

          <span className="text-sm font-medium text-emerald-300">
            Ready to Export
          </span>

        </div>

      </div>

      {/* Features */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <Feature text="Property Score" />

        <Feature text="Environmental Analysis" />

        <Feature text="Investment Recommendations" />

      </div>

      {/* Download Button */}

      <a
        href="http://127.0.0.1:8000/report/pdf"
        target="_blank"
        rel="noreferrer"
        className="group mt-10 flex items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/25"
      >

        <Download
          className="transition-transform duration-300 group-hover:translate-y-1"
          size={22}
        />

        Download PDF Report

      </a>

      {/* Footer */}

      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <ShieldCheck
          className="text-cyan-400"
          size={22}
        />

        <p className="text-sm text-neutral-400">
          Generated using Mireye geospatial intelligence and environmental datasets.
        </p>

      </div>

    </section>
  );
}

function Feature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 text-center">

      <div className="mb-3 text-2xl">
        📄
      </div>

      <p className="font-medium">
        {text}
      </p>

    </div>
  );
}