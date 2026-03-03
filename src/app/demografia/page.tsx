"use client";

import Footer from "@/components/layout/Footer";
import { populacaoHistorica, piramideEtaria } from "@/data/demografia";
import { formatNumber, calcVariation } from "@/lib/utils";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function DemografiaPage() {
  const atual = populacaoHistorica.at(-1)!;
  const anterior = populacaoHistorica.at(-2)!;
  const variacao = calcVariation(atual.populacao, anterior.populacao);

  // Taxa de crescimento anual
  const taxaCrescimento = populacaoHistorica.slice(1).map((d, i) => ({
    ano: d.ano,
    taxa: calcVariation(d.populacao, populacaoHistorica[i].populacao),
  }));

  // Pirâmide: masculino como negativo para espelhar
  const piramideFormatada = piramideEtaria.map((d) => ({
    ...d,
    masculino: -d.masculino,
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6 space-y-6">

        {/* Cabeçalho */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Demografia</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Dados populacionais e distribuição demográfica de Uberlândia.
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">População atual</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatNumber(atual.populacao)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Estimativa {atual.ano}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Crescimento anual</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
              +{variacao}%
            </p>
            <p className="text-xs text-gray-400 mt-1">vs. {anterior.ano}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Crescimento (2010–2023)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              +{formatNumber(atual.populacao - populacaoHistorica[0].populacao)}
            </p>
            <p className="text-xs text-gray-400 mt-1">habitantes em 13 anos</p>
          </div>
        </div>

        {/* Evolução populacional */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Evolução populacional (2010–2023)
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={populacaoHistorica}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                tick={{ fontSize: 12 }}
                width={48}
              />
              <Tooltip formatter={(v) => [formatNumber(Number(v)), "População"]} />
              <Line
                type="monotone"
                dataKey="populacao"
                stroke="#2563EB"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Taxa de crescimento */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Taxa de crescimento anual (%)
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={taxaCrescimento}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} width={40} />
              <Tooltip formatter={(v) => [`${v}%`, "Crescimento"]} />
              <Bar dataKey="taxa" fill="#2563EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pirâmide etária */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
            Pirâmide etária
          </h2>
          <p className="text-xs text-gray-400 mb-4">Distribuição por faixa etária e sexo</p>
          <ResponsiveContainer width="100%" height={420}>
            <BarChart
              data={piramideFormatada}
              layout="vertical"
              margin={{ left: 8, right: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                type="number"
                tickFormatter={(v) => `${Math.abs(v / 1000).toFixed(0)}k`}
                tick={{ fontSize: 11 }}
              />
              <YAxis type="category" dataKey="faixa" tick={{ fontSize: 11 }} width={40} />
              <Tooltip
                formatter={(v, name) => [
                  formatNumber(Math.abs(Number(v))),
                  name === "masculino" ? "Masculino" : "Feminino",
                ]}
              />
              <Legend
                formatter={(value) =>
                  value === "masculino" ? "Masculino" : "Feminino"
                }
              />
              <Bar dataKey="masculino" fill="#2563EB" radius={[0, 4, 4, 0]} stackId="a" />
              <Bar dataKey="feminino" fill="#EC4899" radius={[4, 0, 0, 4]} stackId="b" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
      <Footer />
    </div>
  );
}