import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { api } from "../services/api";
import type { PropertyResponse } from "../types/property";

interface Props {
  setResult: React.Dispatch<
    React.SetStateAction<PropertyResponse | null>
  >;
}

export default function PropertyForm({ setResult }: Props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeProperty = async () => {
    try {
      setLoading(true);

      const response = await api.post<PropertyResponse>("/analyze", {
        lat: Number(latitude),
        lng: Number(longitude),
      });

      setResult(response.data);
    } catch (error) {
      console.error("Analysis failed:", error);
      alert("Failed to analyze property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20">
      <h1 className="mb-4 text-center text-5xl font-bold">
        AI Property
        <span className="text-emerald-400"> Due Diligence</span>
      </h1>

      <p className="mb-12 max-w-2xl text-center text-neutral-400">
        Analyze any US property using trusted geospatial intelligence.
        Evaluate terrain, flood risk, utilities and environmental hazards
        before making a decision.
      </p>

      <div className="w-full max-w-lg space-y-5">
        <Input
          type="number"
          step="any"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />

        <Input
          type="number"
          step="any"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />

        <Button
          className="w-full"
          onClick={analyzeProperty}
          disabled={loading || !latitude || !longitude}
        >
          {loading ? "Analyzing..." : "Analyze Property"}
        </Button>
      </div>
    </section>
  );
}