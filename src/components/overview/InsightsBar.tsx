"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

const insights = [
  "A receita municipal cresceu 59% entre 2018 e 2023, passando de R$ 3,1 bi para R$ 4,95 bi.",
  "A população de Uberlândia cresceu mais de 130 mil habitantes na última década.",
  "O PIB per capita saltou de R$ 30.130 em 2010 para R$ 55.380 em 2021, um crescimento de 83%.",
  "Em 2023, o município registrou superávit de R$ 240 milhões no orçamento.",
];

export default function InsightsBar() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb size={16} className="text-yellow-500" />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Destaques
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 min-h-[40px] transition-all">
        {insights[active]}
      </p>

      {/* Dots de navegação */}
      <div className="flex items-center gap-2 mt-4">
        {insights.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all
              ${i === active
                ? "w-6 bg-brand-primary"
                : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}