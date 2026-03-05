import React from "react";

interface CardVantagensProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export default function CardVantagens({
  title,
  description,
  icon,
  highlight,
}: CardVantagensProps) {
  return (
    <div
      className={`flex flex-col items-center text-center border border-neutral-200 p-6 rounded-2xl w-ful backdrop-blur-sm shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 ${highlight ? "bg-purple-600/80" : "bg-white/60"}`}
    >
      <div className="w-14 h-14 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3
        className={`text-2xl font-semibold ${highlight ? "text-white font-bold" : "text-slate-900"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-md ${highlight ? "text-white/80 font-semibold" : "text-slate-600"}`}
      >
        {description}
      </p>
    </div>
  );
}
