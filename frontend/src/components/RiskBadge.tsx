interface Props {
  title: string;
  value: string;
}

export default function RiskBadge({
  title,
  value,
}: Props) {
  let bg = "bg-neutral-800";
  let text = "text-white";

  if (value.toLowerCase().includes("low")) {
    bg = "bg-emerald-500/20";
    text = "text-emerald-400";
  }

  if (value.toLowerCase().includes("high")) {
    bg = "bg-red-500/20";
    text = "text-red-400";
  }

  return (
    <div className={`rounded-xl ${bg} p-5`}>

      <p className="text-sm text-neutral-400">
        {title}
      </p>

      <p className={`mt-2 text-lg font-bold ${text}`}>
        {value}
      </p>

    </div>
  );
}