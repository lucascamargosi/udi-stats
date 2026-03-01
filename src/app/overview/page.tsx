import StatCard from "@/components/overview/StatCard";
import InsightsBar from "@/components/overview/InsightsBar";
import Footer from "@/components/layout/Footer";
import { populacaoHistorica } from "@/data/demografia";
import { economiaHistorica } from "@/data/economia";
import { orcamentoHistorico } from "@/data/orcamento";
import { formatNumber, formatCurrency, calcVariation, lastN } from "@/lib/utils";

export default function OverviewPage() {
  // Últimos 5 anos de cada série
  const pop5 = lastN(populacaoHistorica, 5);
  const eco5 = lastN(economiaHistorica, 5);
  const orc5 = lastN(orcamentoHistorico, 5);

  // Variações (último vs penúltimo)
  const varPop = calcVariation(pop5.at(-1)!.populacao, pop5.at(-2)!.populacao);
  const varPib = calcVariation(eco5.at(-1)!.pib, eco5.at(-2)!.pib);
  const varRec = calcVariation(orc5.at(-1)!.receita, orc5.at(-2)!.receita);
  const varDes = calcVariation(orc5.at(-1)!.despesa, orc5.at(-2)!.despesa);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6 space-y-6">
        {/* Cabeçalho */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Visão geral dos principais indicadores de Uberlândia.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            title="População"
            value={formatNumber(pop5.at(-1)!.populacao)}
            variation={varPop}
            chartData={pop5.map((d) => ({ ano: d.ano, valor: d.populacao }))}
            color="#2563EB"
          />
          <StatCard
            title="PIB"
            value={formatCurrency(eco5.at(-1)!.pib)}
            variation={varPib}
            chartData={eco5.map((d) => ({ ano: d.ano, valor: d.pib }))}
            color="#7C3AED"
          />
          <StatCard
            title="Receita Municipal"
            value={formatCurrency(orc5.at(-1)!.receita)}
            variation={varRec}
            chartData={orc5.map((d) => ({ ano: d.ano, valor: d.receita }))}
            color="#059669"
          />
          <StatCard
            title="Despesa Municipal"
            value={formatCurrency(orc5.at(-1)!.despesa)}
            variation={varDes}
            chartData={orc5.map((d) => ({ ano: d.ano, valor: d.despesa }))}
            color="#DC2626"
          />
        </div>

        {/* Insights */}
        <InsightsBar />
      </div>

      <Footer />
    </div>
  );
}