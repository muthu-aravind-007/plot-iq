import { BadgeDollarSign } from "lucide-react";

interface Props {
  score: number;
}

export default function InvestmentCard({
  score,
}: Props) {

  let title = "";
  let color = "";

  if (score >= 90) {

    title = "★★★★★ Premium Investment";
    color = "text-emerald-400";

  } else if (score >= 75) {

    title = "★★★★ Excellent";
    color = "text-green-400";

  } else if (score >= 60) {

    title = "★★★ Good";
    color = "text-yellow-400";

  } else {

    title = "★ High Risk";
    color = "text-red-400";
  }

  return (
    <div className="rounded-3xl bg-neutral-900 p-8">

      <div className="mb-5 flex items-center gap-3">

        <BadgeDollarSign className="text-emerald-400" />

        <h2 className="text-3xl font-bold">
          Investment Grade
        </h2>

      </div>

      <h3 className={`text-4xl font-bold ${color}`}>
        {title}
      </h3>

    </div>
  );
}