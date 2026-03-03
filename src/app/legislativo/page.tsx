"use client";

import Footer from "@/components/layout/Footer";
import {
  vereadores,
  producaoLegislativa,
  gastosCamara,
  vereradoresPorPartido,
} from "@/data/legislativo";
import { formatCurrency } from "@/lib/utils";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

export default function LegislativoPage() {
  const porPartido = vereradoresPorPartido();
  const ultimoGasto = gastosCamara.at(-1)!;
  const custoPorVereador = ultimoGasto.orcamento / vereadores.length;
  const ultimaProd = producaoLegislativa.at(-1)!;
  const taxaAprovacao = ((ultimaProd.aprovados / ultimaProd.projetos) * 100).toFixed(1);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6 space-y-6">

        {/* Cabeçalho */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Legislativo</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Composição da Câmara Municipal, produção legislativa e gastos.
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Vereadores</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {vereadores.length}
            </p>
            <p className="text-xs text-gray-400 mt-1">Mandato 2021–2024</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Projetos aprovados ({ultimaProd.ano})</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {ultimaProd.aprovados}
            </p>
            <p className="text-xs text-green-500 mt-1">{taxaAprovacao}% de aprovação</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Orçamento da Câmara ({ultimoGasto.ano})</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatCurrency(ultimoGasto.orcamento)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Custo anual total</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Custo por vereador</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatCurrency(custoPorVereador)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Média anual ({ultimoGasto.ano})</p>
          </div>
        </div>

        {/* Composição por partido + Produção legislativa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Composição por partido
            </h2>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={porPartido} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="partido" tick={{ fontSize: 11 }} width={90} />
                <Tooltip formatter={(v) => [`${v} vereador(es)`, ""]} />
                <Bar dataKey="total" radius={[0, 4, 4, 0]}>
                  {porPartido.map((entry, i) => (
                    <Cell key={i} fill={entry.cor} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Produção legislativa
            </h2>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={producaoLegislativa}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} width={40} />
                <Tooltip />
                <Legend />
                <Bar dataKey="projetos" name="Apresentados" fill="#6B7280" radius={[4, 4, 0, 0]} />
                <Bar dataKey="aprovados" name="Aprovados" fill="#2563EB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gastos da Câmara */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Orçamento da Câmara Municipal (2019–2023)
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={gastosCamara}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis
                tickFormatter={(v) => `${(v / 1_000_000).toFixed(0)}mi`}
                tick={{ fontSize: 12 }}
                width={48}
              />
              <Tooltip formatter={(v) => [formatCurrency(Number(v)), "Orçamento"]} />
              <Bar dataKey="orcamento" fill="#7C3AED" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabela de vereadores */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Vereadores — Mandato 2021–2024
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 px-3 text-gray-500 dark:text-gray-400 font-medium">#</th>
                  <th className="text-left py-2 px-3 text-gray-500 dark:text-gray-400 font-medium">Nome</th>
                  <th className="text-left py-2 px-3 text-gray-500 dark:text-gray-400 font-medium">Partido</th>
                  <th className="text-left py-2 px-3 text-gray-500 dark:text-gray-400 font-medium">Situação</th>
                </tr>
              </thead>
              <tbody>
                {vereadores.map((v, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="py-2 px-3 text-gray-400">{i + 1}</td>
                    <td className="py-2 px-3 text-gray-900 dark:text-white font-medium">{v.nome}</td>
                    <td className="py-2 px-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {v.partido}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-gray-600 dark:text-gray-400">{v.situacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}