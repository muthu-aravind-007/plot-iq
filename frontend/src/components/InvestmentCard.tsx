import {
  BadgeDollarSign,
  Star,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

interface Props {
  score: number;
}

export default function InvestmentCard({
  score,
}: Props) {

  let title = "";
  let color = "";
  let description = "";
  let uses: string[] = [];

  if (score >= 90) {

    title = "★★★★★ Premium Investment";
    color = "text-emerald-400";

    description =
      "Exceptional property with minimal environmental risk and excellent long-term investment potential.";

    uses = [
      "Residential Development",
      "Commercial Projects",
      "Long-term Investment",
    ];

  } else if (score >= 75) {

    title = "★★★★ Excellent";
    color = "text-green-400";

    description =
      "Strong investment opportunity with only minor environmental considerations.";

    uses = [
      "Residential",
      "Commercial",
      "Rental Property",
    ];

  } else if (score >= 60) {

    title = "★★★ Good";
    color = "text-yellow-400";

    description =
      "Moderate investment potential. Additional due diligence is recommended.";

    uses = [
      "Residential",
      "Selective Commercial",
    ];

  } else {

    title = "★ High Risk";
    color = "text-red-400";

    description =
      "Environmental or terrain risks should be reviewed carefully before investing.";

    uses = [
      "Professional Review Required",
    ];
  }

  return (

    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-xl">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-emerald-500/10 p-3">

          <BadgeDollarSign
            className="text-emerald-400"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Investment Assessment
          </h2>

          <p className="text-neutral-400">
            AI-generated investment outlook
          </p>

        </div>

      </div>

      {/* Grade */}

      <div className="flex items-center gap-4">

        <Star
          className={`${color} fill-current`}
          size={34}
        />

        <h3
          className={`text-4xl font-bold ${color}`}
        >
          {title}
        </h3>

      </div>

      <p className="mt-6 max-w-3xl leading-8 text-neutral-300">
        {description}
      </p>

      {/* Suitable For */}

      <div className="mt-10">

        <div className="mb-5 flex items-center gap-2">

          <ShieldCheck
            className="text-emerald-400"
            size={22}
          />

          <h4 className="text-xl font-semibold">
            Suitable For
          </h4>

        </div>

        <div className="grid gap-4 md:grid-cols-3">

          {uses.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-4"
            >

              <CheckCircle2
                className="text-emerald-400"
                size={20}
              />

              <span className="font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Confidence */}

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

        <div className="mb-3 flex items-center gap-2">

          <ShieldCheck
            className="text-cyan-400"
            size={20}
          />

          <span className="font-semibold">
            AI Confidence
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-neutral-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000"
            style={{
              width: `${Math.min(score, 100)}%`,
            }}
          />

        </div>

        <p className="mt-3 text-sm text-neutral-400">
          Confidence based on geospatial, terrain, flood, and environmental analysis.
        </p>

      </div>

    </section>

  );
}