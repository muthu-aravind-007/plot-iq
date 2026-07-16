interface RiskBadgeProps {
  title: string;
  value: string;
}

export default function RiskBadge({
  title,
  value,
}: RiskBadgeProps) {

  const getColor = () => {

    if (
      value.toLowerCase().includes("high")
    )
      return "text-red-400";

    if (
      value.toLowerCase().includes("medium")
    )
      return "text-yellow-400";

    return "text-emerald-400";
  };

  return (
    <div className="rounded-2xl bg-neutral-800 p-6">

      <p className="mb-3 text-neutral-400">
        {title}
      </p>

      <h3 className={`text-3xl font-bold ${getColor()}`}>
        {value}
      </h3>

    </div>
  );
}