import {
  Database,
  ShieldAlert,
  Trees,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Fetching Mireye Data",
    description: "Retrieving authoritative geospatial datasets.",
    icon: Database,
  },
  {
    title: "Checking FEMA Flood Maps",
    description: "Analyzing floodplain exposure.",
    icon: ShieldAlert,
  },
  {
    title: "Analyzing Environmental Factors",
    description: "Evaluating wetlands and terrain.",
    icon: Trees,
  },
  {
    title: "Calculating Property Score",
    description: "Computing investment and risk metrics.",
    icon: BarChart3,
  },
  {
    title: "Generating AI Report",
    description: "Preparing executive summary and recommendations.",
    icon: Sparkles,
  },
];

export default function AnalysisProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-xl">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-emerald-500/10 p-3">

          <Sparkles
            className="text-emerald-400"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            AI Property Analysis
          </h2>

          <p className="text-neutral-400">
            PlotIQ is analyzing this property...
          </p>

        </div>

      </div>

      <div className="space-y-6">

        {steps.map((step, index) => {
          const Icon = step.icon;

          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step.title}
              className={`flex items-start gap-5 rounded-2xl border p-5 transition-all duration-500 ${
                completed
                  ? "border-emerald-500/20 bg-emerald-500/5"
                  : active
                  ? "border-cyan-500/30 bg-cyan-500/5"
                  : "border-white/10 bg-neutral-900/60"
              }`}
            >
              <div
                className={`rounded-xl p-3 ${
                  completed
                    ? "bg-emerald-500/15 text-emerald-400"
                    : active
                    ? "animate-pulse bg-cyan-500/15 text-cyan-400"
                    : "bg-neutral-800 text-neutral-500"
                }`}
              >
                {completed ? (
                  <CheckCircle2 size={22} />
                ) : (
                  <Icon size={22} />
                )}
              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold">
                    {step.title}
                  </h3>

                  {completed && (
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Completed
                    </span>
                  )}

                  {active && (
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                      Processing...
                    </span>
                  )}

                </div>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {step.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between text-sm">

          <span className="text-neutral-400">
            Overall Progress
          </span>

          <span className="font-semibold text-emerald-400">
            {Math.min(
              Math.round((currentStep / steps.length) * 100),
              100
            )}
            %
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-neutral-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-700"
            style={{
              width: `${Math.min(
                (currentStep / steps.length) * 100,
                100
              )}%`,
            }}
          />

        </div>

      </div>

    </section>
  );
}