import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

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
    <div className="overflow-hidden rounded-2xl border border-neutral-800">

      <MapContainer
        center={[lat, lng]}
        zoom={14}
        scrollWheelZoom={true}
        style={{
          height: "450px",
          width: "100%",
        }}
      >
        <TileLayer
            attribution='© OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[lat, lng]}
          icon={markerIcon}
        >
          <Popup>
            <strong>Property Location</strong>

            <br />

            {lat.toFixed(5)}

            ,

            {lng.toFixed(5)}
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}