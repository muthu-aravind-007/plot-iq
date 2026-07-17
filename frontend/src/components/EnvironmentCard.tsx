interface Props {

  property: {

    elevation: number;

    coast_distance: number;

    wetland: boolean;

    floodplain: boolean;

  };

}

export default function EnvironmentCard({

  property,

}: Props) {

  return (

    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Environmental Analysis

      </h2>

      <div className="space-y-4">

        <Row

          title="Elevation"

          value={`${property.elevation.toFixed(1)} meters`}

        />

        <Row

          title="Distance to Coast"

          value={`${property.coast_distance.toFixed(0)} meters`}

        />

        <Row

          title="Floodplain"

          value={property.floodplain ? "Inside" : "Outside"}

        />

        <Row

          title="Wetland"

          value={property.wetland ? "Present" : "None"}

        />

      </div>

    </div>

  );

}

function Row({

  title,

  value,

}: {

  title: string;

  value: string;

}) {

  return (

    <div className="flex justify-between rounded-lg bg-neutral-800 p-4">

      <span>{title}</span>

      <span className="font-semibold">

        {value}

      </span>

    </div>

  );

}