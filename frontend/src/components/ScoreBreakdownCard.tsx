interface Props {

  breakdown: {

    floodplain: number;

    wetlands: number;

    elevation: number;

    coast: number;

  };

  score: number;

}

export default function ScoreBreakdownCard({

  breakdown,

  score,

}: Props) {

  return (

    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Score Breakdown

      </h2>

      <Break label="Starting Score" value={100} />

      <Break

        label="Floodplain"

        value={-breakdown.floodplain}

      />

      <Break

        label="Wetlands"

        value={-breakdown.wetlands}

      />

      <Break

        label="Elevation"

        value={-breakdown.elevation}

      />

      <Break

        label="Coast"

        value={-breakdown.coast}

      />

      <hr className="my-5 border-neutral-700" />

      <Break

        label="Final Score"

        value={score}

      />

    </div>

  );

}

function Break({

  label,

  value,

}: {

  label: string;

  value: number;

}) {

  return (

    <div className="mb-4 flex justify-between">

      <span>{label}</span>

      <span className="font-bold">

        {value}

      </span>

    </div>

  );

}