import {
  Mountain,
  Waves,
  Zap,
} from "lucide-react";

interface RiskBadgeProps {
  title: string;
  value: string;
}

export default function RiskBadge({
  title,
  value,
}: RiskBadgeProps) {

  const lower = value.toLowerCase();

  const getConfig = () => {

    const good =
      !lower.includes("high") &&
      !lower.includes("poor");

    let icon = <Mountain size={24} />;

    let description = "";

    if (title === "Terrain") {
      icon = <Mountain size={24} />;
      description =
        value === "Flat"
          ? "Low Construction Risk"
          : "Terrain Assessment";
    }

    if (title === "Flood Risk") {
      icon = <Waves size={24} />;
      description =
        value === "Low"
          ? "Minimal Flood Exposure"
          : value === "Medium"
          ? "Moderate Flood Exposure"
          : "High Flood Exposure";
    }

    if (title === "Utilities") {
      icon = <Zap size={24} />;
      description =
        value === "Likely Available"
          ? "Infrastructure Ready"
          : "Utility Review Recommended";
    }

    return {
      icon,
      description,
      border: good
        ? "border-emerald-500/20"
        : "border-yellow-500/20",
      bg: good
        ? "bg-emerald-500/10"
        : "bg-yellow-500/10",
      text: good
        ? "text-emerald-400"
        : "text-yellow-400",
    };
  };

  const config = getConfig();

  return (
    <div
      className={`rounded-3xl border ${config.border} bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40`}
    >

      <div className="mb-6 flex items-center justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${config.bg} ${config.text}`}
        >
          {config.icon}
        </div>

        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Live
        </span>

      </div>

      <p className="text-sm uppercase tracking-wide text-neutral-500">
        {title}
      </p>

      <h3
        className={`mt-3 text-3xl font-bold ${config.text}`}
      >
        {value}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-400">
        {config.description}
      </p>

    </div>
  );
}