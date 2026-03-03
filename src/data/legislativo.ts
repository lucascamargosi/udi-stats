export interface Vereador {
  nome: string;
  nomeUrna: string;
  partido: string;
  situacao: "Em exercício" | "Fora de exercício";
}

export interface ProducaoLegislativa {
  ano: number;
  projetos: number;
  aprovados: number;
}

export interface GastoCamara {
  ano: number;
  orcamento: number;
}

// Fonte: Câmara Municipal de Uberlândia — 20ª Legislatura (2025–2028)
// https://e-processos.camarauberlandia.mg.gov.br/consultas/parlamentar
export const vereadores: Vereador[] = [
  { nome: "Abatenio de Andrade Marquez Neto",       nomeUrna: "Abatenio Marquez",          partido: "PP",           situacao: "Em exercício" },
  { nome: "Adriano Zago",                           nomeUrna: "Adriano Zago",               partido: "Avante",       situacao: "Em exercício" },
  { nome: "Amanda Gondim",                          nomeUrna: "Amanda Gondim",              partido: "PSB",          situacao: "Em exercício" },
  { nome: "Anderson Lima",                          nomeUrna: "Anderson Lima",              partido: "Podemos",      situacao: "Em exercício" },
  { nome: "Ângela Aparecida Caetano Souza",         nomeUrna: "Ângela do Postinho",         partido: "Solidariedade",situacao: "Em exercício" },
  { nome: "Antônio Augusto Gonçalves Goulart",      nomeUrna: "Antônio Augusto Queijinho",  partido: "PSDB",         situacao: "Em exercício" },
  { nome: "Antônio Carrijo",                        nomeUrna: "Antônio Carrijo",            partido: "PP",           situacao: "Em exercício" },
  { nome: "Celisvaldo da Silva",                    nomeUrna: "Pezão do Esporte",           partido: "DC",           situacao: "Em exercício" },
  { nome: "Conrado Augusto Ferreira de Oliveira",   nomeUrna: "Prof. Conrado Augusto",      partido: "MDB",          situacao: "Em exercício" },
  { nome: "Ednaldo Régio de Lima",                  nomeUrna: "Sargento Ednaldo",           partido: "PP",           situacao: "Em exercício" },
  { nome: "Edson Carvalho Ferreira",                nomeUrna: "Edinho Combate ao Câncer",   partido: "Democrata",    situacao: "Em exercício" },
  { nome: "Eliusmarcio Alves de Carvalho",          nomeUrna: "Elinho da Academia",         partido: "Mobiliza",     situacao: "Em exercício" },
  { nome: "Fabio Dias Queiroz Zavitoski",           nomeUrna: "Fabão",                      partido: "PV",           situacao: "Em exercício" },
  { nome: "Gláucia Galante Buíssa",                 nomeUrna: "Gláucia da Saúde",           partido: "PL",           situacao: "Em exercício" },
  { nome: "Igino Marcos da Mata de Oliveira",       nomeUrna: "Dr. Igino",                  partido: "PT",           situacao: "Em exercício" },
  { nome: "Ivan da Silva Nunes",                    nomeUrna: "Ivan Nunes",                 partido: "PP",           situacao: "Em exercício" },
  { nome: "Jair Ferraz",                            nomeUrna: "Jair Ferraz",                partido: "PP",           situacao: "Em exercício" },
  { nome: "Janaina Guimarães Parreira Rezende",     nomeUrna: "Janaina Guimarães",          partido: "PL",           situacao: "Em exercício" },
  { nome: "Lia Eunice Valechi da Silva",            nomeUrna: "Delegada Lia Valechi",       partido: "União Brasil", situacao: "Em exercício" },
  { nome: "Liza Fernandes Prado",                   nomeUrna: "Liza Prado",                 partido: "Cidadania",    situacao: "Em exercício" },
  { nome: "Neemias Miquéias",                       nomeUrna: "Neemias Miquéias",           partido: "Podemos",      situacao: "Em exercício" },
  { nome: "Nei Carlos Borges",                      nomeUrna: "Nei Borges",                 partido: "Solidariedade",situacao: "Em exercício" },
  { nome: "Ronaldo Amélio Ferreira",                nomeUrna: "Prof. Ronaldo",              partido: "PT",           situacao: "Em exercício" },
  { nome: "Ronaldo César Vilela Tannús",            nomeUrna: "Ronaldo Tannús",             partido: "PSDB",         situacao: "Em exercício" },
  { nome: "Rosenvaldo Correia de Mendonça",         nomeUrna: "Zezinho Mendonça",           partido: "PP",           situacao: "Em exercício" },
  { nome: "Sérvio Túlio",                           nomeUrna: "Sérvio Túlio",               partido: "PSDB",         situacao: "Em exercício" },
  { nome: "Thais Andrade",                          nomeUrna: "Thais Andrade",              partido: "União Brasil", situacao: "Em exercício" },
  { nome: "Raphael Leles",                          nomeUrna: "Raphael Leles",              partido: "União Brasil", situacao: "Fora de exercício" },
];

// Produção legislativa — dados a confirmar via portal oficial
export const producaoLegislativa: ProducaoLegislativa[] = [
  { ano: 2021, projetos: 334, aprovados: 214 },
  { ano: 2022, projetos: 298, aprovados: 189 },
  { ano: 2023, projetos: 341, aprovados: 221 },
  { ano: 2024, projetos: 310, aprovados: 198 },
];

// Gastos da Câmara — dados a confirmar via portal oficial
export const gastosCamara: GastoCamara[] = [
  { ano: 2021, orcamento: 74_500_000 },
  { ano: 2022, orcamento: 79_000_000 },
  { ano: 2023, orcamento: 84_200_000 },
  { ano: 2024, orcamento: 89_000_000 },
];

// Agrupa vereadores por partido para o gráfico
export function vereradoresPorPartido(): { partido: string; total: number; cor: string }[] {
  const cores: Record<string, string> = {
    PP: "#7C3AED", Avante: "#6366F1", PSB: "#EC4899",
    Podemos: "#F59E0B", Solidariedade: "#10B981", PSDB: "#14B8A6",
    DC: "#6B7280", MDB: "#059669", PT: "#EF4444",
    Democrata: "#D97706", Mobiliza: "#84CC16", PV: "#22C55E",
    PL: "#DC2626", "União Brasil": "#2563EB", Cidadania: "#0EA5E9",
  };

  const contagem: Record<string, number> = {};
  vereadores
    .filter((v) => v.situacao === "Em exercício")
    .forEach((v) => {
      contagem[v.partido] = (contagem[v.partido] ?? 0) + 1;
    });

  return Object.entries(contagem)
    .map(([partido, total]) => ({ partido, total, cor: cores[partido] ?? "#6B7280" }))
    .sort((a, b) => b.total - a.total);
}