import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import {
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

interface Props {
  lat: number;
  lng: number;
}

const markerIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function PropertyMap({
  lat,
  lng,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-xl">

      {/* Header */}

      <div className="flex flex-col gap-5 border-b border-white/10 p-6 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <MapPinned
            size={24}
            className="text-emerald-400"
          />

          <div>

            <h2 className="text-2xl font-bold">
              Property Location
            </h2>

            <p className="text-sm text-neutral-500">
              Interactive geospatial location
            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-3">

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            📍 {lat.toFixed(5)}
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            🌐 {lng.toFixed(5)}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            <ShieldCheck size={16} />
            Verified
          </div>

        </div>

      </div>

      {/* Map */}

      <MapContainer
        center={[lat, lng]}
        zoom={14}
        scrollWheelZoom
        style={{
          height: "480px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[lat, lng]}
          icon={markerIcon}
        >
          <Popup>

            <strong>PlotIQ Property</strong>

            <br />

            Latitude:
            {" "}
            {lat.toFixed(5)}

            <br />

            Longitude:
            {" "}
            {lng.toFixed(5)}

          </Popup>

        </Marker>

      </MapContainer>

    </div>
  );
}