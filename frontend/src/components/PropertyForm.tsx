import { useState } from "react";
import {
  Loader2,
  MapPinned,
  Sparkles,
  Search,
} from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { api } from "../services/api";
import type { PropertyResponse } from "../types/property";

interface Props {
  setResult: React.Dispatch<
    React.SetStateAction<PropertyResponse | null>
  >;
}

export default function PropertyForm({
  setResult,
}: Props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeProperty = async () => {
    try {
      setLoading(true);

      const response = await api.post<PropertyResponse>(
        "/analyze",
        {
          lat: Number(latitude),
          lng: Number(longitude),
        }
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-center px-6">

      <div className="w-full max-w-3xl">

        {/* Badge */}

        <div className="mb-8 flex justify-center">

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">

            <Sparkles size={16} />

            AI Powered Property Intelligence

          </div>

        </div>

        {/* Hero */}

        <h1 className="text-center text-6xl font-black leading-tight">

          Analyze Any

          <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">

            US Property

          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-neutral-400">

          Instantly evaluate flood risk, terrain,
          wetlands, utilities and investment potential
          using trusted geospatial intelligence powered
          by Mireye.

        </p>

        {/* Form */}

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">

                <MapPinned size={16} />

                Latitude

              </label>

              <Input
                type="number"
                step="any"
                placeholder="29.7604"
                value={latitude}
                onChange={(e) =>
                  setLatitude(e.target.value)
                }
                className="h-14 rounded-xl border-neutral-700 bg-neutral-900 text-lg"
              />

            </div>

            <div>

              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-neutral-300">

                <MapPinned size={16} />

                Longitude

              </label>

              <Input
                type="number"
                step="any"
                placeholder="-95.3698"
                value={longitude}
                onChange={(e) =>
                  setLongitude(e.target.value)
                }
                className="h-14 rounded-xl border-neutral-700 bg-neutral-900 text-lg"
              />

            </div>

          </div>

          <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">

            <p className="text-sm text-neutral-400">

              Example Coordinates

            </p>

            <p className="mt-1 text-sm text-emerald-400">

              Houston, Texas

            </p>

            <p className="text-sm text-neutral-500">

              Latitude: 29.7604

              {" • "}

              Longitude: -95.3698

            </p>

          </div>

          <Button
            onClick={analyzeProperty}
            disabled={
              loading ||
              !latitude ||
              !longitude
            }
            className="mt-8 h-14 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20"
          >

            {loading ? (
              <>

                <Loader2
                  className="mr-2 animate-spin"
                  size={20}
                />

                Analyzing Property...

              </>
            ) : (
              <>

                <Search
                  className="mr-2"
                  size={20}
                />

                Analyze Property

              </>
            )}

          </Button>

        </div>

        {/* Bottom Stats */}

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">

          <div>

            <h2 className="text-3xl font-bold text-emerald-400">

              FEMA

            </h2>

            <p className="mt-2 text-sm text-neutral-500">

              Flood Hazard

            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">

              NOAA

            </h2>

            <p className="mt-2 text-sm text-neutral-500">

              Coastal Data

            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">

              USGS

            </h2>

            <p className="mt-2 text-sm text-neutral-500">

              Elevation

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}