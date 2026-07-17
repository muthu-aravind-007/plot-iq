interface Property {

  lat: number;

  lng: number;

  elevation: number;

  coast_distance: number;

  wetland: boolean;

  floodplain: boolean;

}

interface Props {

  property: Property;

}

export default function PropertyFactsCard({

  property,

}: Props) {

  return (

    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">

        Property Facts

      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <Fact
          label="Latitude"
          value={property.lat.toFixed(6)}
        />

        <Fact
          label="Longitude"
          value={property.lng.toFixed(6)}
        />

        <Fact
          label="Elevation"
          value={`${property.elevation.toFixed(1)} m`}
        />

        <Fact
          label="Distance to Coast"
          value={`${property.coast_distance.toFixed(0)} m`}
        />

        <Fact
          label="Floodplain"
          value={property.floodplain ? "Yes" : "No"}
        />

        <Fact
          label="Wetland"
          value={property.wetland ? "Yes" : "No"}
        />

      </div>

    </div>

  );

}

function Fact({

  label,

  value,

}: {

  label: string;

  value: string;

}) {

  return (

    <div className="rounded-xl bg-neutral-800 p-4">

      <p className="text-sm text-neutral-400">

        {label}

      </p>

      <p className="mt-2 text-xl font-semibold">

        {value}

      </p>

    </div>

  );

}