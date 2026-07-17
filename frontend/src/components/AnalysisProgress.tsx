const steps = [

  "Fetching USGS data",

  "Checking FEMA flood maps",

  "Analyzing wetlands",

  "Calculating property score",

  "Generating AI report",

];

export default function AnalysisProgress() {

  return (

    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <h2 className="mb-6 text-xl font-bold">

        Property Analysis

      </h2>

      <div className="space-y-4">

        {steps.map((step) => (

          <div

            key={step}

            className="flex items-center gap-4"

          >

            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

            <span>{step}</span>

          </div>

        ))}

      </div>

    </div>

  );

}