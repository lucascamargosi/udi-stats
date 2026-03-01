'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';

interface StatCardProps {
  title: string;
  value: string;
  variation: number; // percentual ex: 2.3 ou -1.5
  chartData: { ano: number; valor: number }[];
  color?: string;
}

export default function StatCard({
  title,
  value,
  variation,
  chartData,
  color = '#2563EB',
}: StatCardProps) {
  const positive = variation >= 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4">
      {/* Título e variação */}
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </span>
        <span
          className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full
            ${
              positive
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}
        >
          {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {positive ? '+' : ''}
          {variation}%
        </span>
      </div>

      {/* Valor principal */}
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </div>

      {/* Mini gráfico */}
      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                background: 'transparent',
                border: 'none',
                fontSize: '11px',
              }}
              formatter={(v) => [Number(v).toLocaleString('pt-BR'), '']}
              labelFormatter={(l) => `${l}`}
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${title})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-gray-400">Últimos 5 anos</p>
    </div>
  );
}
