'use client';

import Footer from '@/components/layout/Footer';
import { economiaHistorica, pibSetorial } from '@/data/economia';
import { formatCurrency, calcVariation } from '@/lib/utils';
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
} from 'recharts';

export default function EconomiaPage() {
  const atual = economiaHistorica.at(-1)!;
  const anterior = economiaHistorica.at(-2)!;
  const primeiro = economiaHistorica[0];

  const varPib = calcVariation(atual.pib, anterior.pib);
  const varPerCapita = calcVariation(atual.pibPerCapita, anterior.pibPerCapita);
  const crescimentoTotal = calcVariation(atual.pib, primeiro.pib);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6 space-y-6">
        {/* Cabeçalho */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Economia
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            PIB, crescimento econômico e distribuição setorial de Uberlândia.
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              PIB ({atual.ano})
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatCurrency(atual.pib)}
            </p>
            <p className="text-xs text-green-500 mt-1">
              +{varPib}% vs. {anterior.ano}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              PIB per capita
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {formatCurrency(atual.pibPerCapita)}
            </p>
            <p className="text-xs text-green-500 mt-1">
              +{varPerCapita}% vs. {anterior.ano}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Crescimento (2010–2021)
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              +{crescimentoTotal}%
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {formatCurrency(primeiro.pib)} → {formatCurrency(atual.pib)}
            </p>
          </div>
        </div>

        {/* Evolução do PIB */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Evolução do PIB (2010–2021)
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChartPIB data={economiaHistorica} />
          </ResponsiveContainer>
        </div>

        {/* PIB per capita + Distribuição setorial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              PIB per capita (R$)
            </h2>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={economiaHistorica}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="ano" tick={{ fontSize: 11 }} />
                <YAxis
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                  tick={{ fontSize: 11 }}
                  width={44}
                />
                <Tooltip
                  formatter={(v) => [formatCurrency(Number(v)), 'Per capita']}
                />
                <Bar
                  dataKey="pibPerCapita"
                  fill="#7C3AED"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Distribuição setorial do PIB
            </h2>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={pibSetorial}
                  dataKey="valor"
                  nameKey="setor"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, percent }) =>
                    `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {pibSetorial.map((entry, i) => (
                    <Cell key={i} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [formatCurrency(Number(v)), '']} />
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

// Sub-componente local para o gráfico de área do PIB
import { AreaChart, Area } from 'recharts';

function AreaChartPIB({ data }: { data: typeof economiaHistorica }) {
  return (
    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="gradientPib" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
          <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
      <YAxis
        tickFormatter={(v) => `${(v / 1_000_000_000).toFixed(0)}bi`}
        tick={{ fontSize: 12 }}
        width={48}
      />
      <Tooltip formatter={(v) => [formatCurrency(Number(v)), 'PIB']} />
      <Area
        type="monotone"
        dataKey="pib"
        stroke="#7C3AED"
        strokeWidth={2}
        fill="url(#gradientPib)"
        dot={{ r: 3 }}
      />
    </AreaChart>
  );
}
