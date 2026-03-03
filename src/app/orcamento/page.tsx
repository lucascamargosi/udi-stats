"use client";

import Footer from "@/components/layout/Footer";
import {
  orcamentoHistorico,
  despesaPorSecretaria,
  receitaPorFonte,
} from "@/data/orcamento";
import { formatCurrency, calcVariation } from "@/lib/utils";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

export default function OrcamentoPage() {
  const atual = orcamentoHistorico.at(-1)!;
  const anterior = orcamentoHistorico.at(-2)!;

  const superavit = atual.receita - atual.despesa;
  const varReceita = calcVariation(atual.receita, anterior.receita);
  const varDespesa = calcVariation(atual.despesa, anterior.despesa);

  // Superávit/déficit por ano
  const resultado = orcamentoHistorico.map((d) => ({
    ano: d.ano,
    resultado: d.receita - d.despesa,
  }));

  // Percentuais saúde e educação
  const totalDespesa = despesaPorSecretaria.reduce((acc, d) => acc + d.valor, 0);
  const saude = despesaPorSecretaria.find((d) => d.secretaria === "Saúde")!;
  const educacao = despesaPorSecretaria.find((d) => d.secretaria === "Educação")!;
  const pctSaude = ((saude.valor / totalDespesa) * 100).toFixed(1);
  const pctEducacao = ((educacao.valor / totalDespesa) * 100).toFixed(1);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6 space-y-6">

        {/* Cabeçalho */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Orçamento</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Receitas, despesas e resultado orçamentário do município.
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Receita ({atual.ano})</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatCurrency(atual.receita)}
            </p>
            <p className="text-xs text-green-500 mt-1">+{varReceita}% vs. {anterior.ano}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Despesa ({atual.ano})</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatCurrency(atual.despesa)}
            </p>
            <p className="text-xs text-red-500 mt-1">+{varDespesa}% vs. {anterior.ano}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Superávit ({atual.ano})</p>
            <p className={`text-2xl font-bold mt-1 ${superavit >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {formatCurrency(superavit)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Receita − Despesa</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Saúde / Educação</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {pctSaude}% / {pctEducacao}%
            </p>
            <p className="text-xs text-gray-400 mt-1">do total de despesas</p>
          </div>
        </div>

        {/* Evolução receita vs despesa */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Receita vs Despesa (2018–2023)
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={orcamentoHistorico}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis
                tickFormatter={(v) => `${(v / 1_000_000_000).toFixed(1)}bi`}
                tick={{ fontSize: 12 }}
                width={52}
              />
              <Tooltip formatter={(v) => [formatCurrency(Number(v)), ""]} />
              <Legend />
              <Bar dataKey="receita" name="Receita" fill="#059669" radius={[4, 4, 0, 0]} />
              <Bar dataKey="despesa" name="Despesa" fill="#DC2626" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Superávit/Déficit */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Resultado orçamentário (Superávit / Déficit)
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={resultado}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis
                tickFormatter={(v) => `${(v / 1_000_000).toFixed(0)}mi`}
                tick={{ fontSize: 12 }}
                width={52}
              />
              <Tooltip formatter={(v) => [formatCurrency(Number(v)), "Resultado"]} />
              <ReferenceLine y={0} stroke="#6B7280" strokeDasharray="4 4" />
              <Bar
                dataKey="resultado"
                radius={[4, 4, 0, 0]}
                fill="#059669"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Despesa por secretaria + Receita por fonte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Despesa por secretaria
            </h2>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={despesaPorSecretaria}
                  dataKey="valor"
                  nameKey="secretaria"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, percent }) =>
                    `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {despesaPorSecretaria.map((entry, i) => (
                    <Cell key={i} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [formatCurrency(Number(v)), ""]} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Receita por fonte
            </h2>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={receitaPorFonte}
                  dataKey="valor"
                  nameKey="fonte"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, percent }) =>
                    `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {receitaPorFonte.map((entry, i) => (
                    <Cell key={i} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [formatCurrency(Number(v)), ""]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}