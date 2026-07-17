import {
  MapPin,
  Mountain,
  Waves,
  Compass,
  Trees,
  ShieldAlert,
} from "lucide-react";

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
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-xl">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-cyan-500/10 p-3">

          <MapPin
            className="text-cyan-400"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Property Facts
          </h2>

          <p className="text-neutral-400">
            Geographic and environmental attributes
          </p>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <Fact
          icon={<Compass size={22} />}
          label="Latitude"
          value={property.lat.toFixed(6)}
        />

        <Fact
          icon={<Compass size={22} />}
          label="Longitude"
          value={property.lng.toFixed(6)}
        />

        <Fact
          icon={<Mountain size={22} />}
          label="Elevation"
          value={`${property.elevation.toFixed(1)} m`}
        />

        <Fact
          icon={<Waves size={22} />}
          label="Distance to Coast"
          value={`${property.coast_distance.toFixed(0)} m`}
        />

        <Fact
          icon={<ShieldAlert size={22} />}
          label="Floodplain"
          value={
            property.floodplain
              ? "Inside Floodplain"
              : "Outside Floodplain"
          }
          status={!property.floodplain}
        />

        <Fact
          icon={<Trees size={22} />}
          label="Wetlands"
          value={
            property.wetland
              ? "Present"
              : "Not Detected"
          }
          status={!property.wetland}
        />

      </div>

    </section>
  );
}

interface FactProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  status?: boolean;
}

function Fact({
  icon,
  label,
  value,
  status,
}: FactProps) {

  return (

    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30">

      <div className="mb-4 flex items-center justify-between">

        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">

          {icon}

        </div>

        {status !== undefined && (

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              status
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/15 text-red-300"
            }`}
          >
            {status ? "Good" : "Warning"}
          </span>

        )}

      </div>

      <p className="text-sm uppercase tracking-wide text-neutral-500">
        {label}
      </p>

      <h3 className="mt-3 text-xl font-bold text-white">
        {value}
      </h3>

    </div>

  );
}