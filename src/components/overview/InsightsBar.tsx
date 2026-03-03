"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

const insights = [
  "A população de Uberlândia chegou a 761.835 habitantes em 2025, crescimento de 26% desde 2010.",
  "O PIB de Uberlândia atingiu R$ 51 bilhões em 2023, consolidando a cidade como uma das maiores economias de Minas Gerais.",
  "Em 2024 a despesa municipal superou a receita, registrando déficit de R$ 254 milhões.",
  "A Câmara Municipal gastou R$ 61,1 milhões em 2024, com custo médio de R$ 2,26 milhões por vereador.",
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