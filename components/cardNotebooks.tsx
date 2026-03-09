"use client";

import { handleClickTracker } from "@/utils/trackerClick";
import { useState } from "react";

interface CardNotebooksProps {
  title: string;
  description?: string;
  image?: string;
  specs?: Record<string, string | undefined>;
  prices?: Record<string, string>;
}

export default function CardNotebooks({
  title,
  description,
  image,
  specs,
  prices,
}: CardNotebooksProps) {
  const [showSpecs, setShowSpecs] = useState(false);
  const monthly = prices?.["24x"] ?? Object.values(prices || {})[0];

  const fmt = (v?: string) => {
    if (!v) return undefined;
    try {
      const n = Number(v.replace(/[^0-9.,]/g, "").replace(/,/g, "."));
      return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    } catch {
      return `R$ ${v}`;
    }
  };

  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <>
      <article className="group flex flex-col rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-40 bg-linear-to-br from-slate-900 to-slate-700 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={`/${image}`}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <span className="text-3xl font-black text-white/20 tracking-widest select-none">
              {initials}
            </span>
          )}
          {monthly && (
            <div className="absolute bottom-3 left-3 bg-white text-slate-900 text-sm font-bold px-3 py-1 rounded-full shadow">
              24x {fmt(monthly) ?? monthly}
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-4 gap-3">
          <h3 className="text-base font-bold text-slate-900 leading-tight line-clamp-2">
            {title}
          </h3>

          {description && (
            <p className="text-sm text-slate-500 line-clamp-1">{description}</p>
          )}

          <div className="mt-auto pt-3 border-t border-slate-100">
            <div className="text-xs text-slate-400 uppercase tracking-wide">
              A partir de
            </div>
            <div className="text-2xl font-black text-slate-900 leading-none mt-0.5">
              {monthly ? fmt(monthly) : "Consulte"}
            </div>
            <div className="text-xs text-slate-400 mt-1">/mês • 24x</div>
          </div>

          {prices && (
            <div className="flex gap-2 flex-wrap">
              {Object.entries(prices).map(([term, val]) => (
                <span
                  key={term}
                  className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-medium"
                >
                  {term}: {fmt(val) ?? val}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2 mt-1">
            <button
              onClick={() => setShowSpecs(true)}
              className="flex-1 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Detalhes
            </button>
            <a
              href={`https://wa.me/5585985834565?text=${encodeURIComponent(
                `Olá, tenho interesse no aluguel do ${title}. Gostaria de mais informações.`,
              )}`}
              onClick={() => handleClickTracker()}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors text-center"
            >
              Alugar
            </a>
          </div>
        </div>
      </article>

      {showSpecs && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setShowSpecs(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h4 className="text-base font-bold text-slate-900">{title}</h4>
              <button
                onClick={() => setShowSpecs(false)}
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-5 flex flex-col gap-2">
              {specs &&
                Object.entries(specs)
                  .filter(([, v]) => v !== undefined)
                  .map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between gap-4 py-2 border-b border-slate-50 last:border-0"
                    >
                      <span className="text-sm text-slate-500">
                        {k.replace(/[_-]/g, " ")}
                      </span>
                      <span className="text-sm font-medium text-slate-800 text-right">
                        {v}
                      </span>
                    </div>
                  ))}
            </div>

            <div className="p-5 border-t border-slate-100">
              <button
                onClick={() => setShowSpecs(false)}
                className="w-full py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
