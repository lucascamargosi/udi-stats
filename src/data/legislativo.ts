export interface Vereador {
  nome: string;
  partido: string;
  situacao: "Titular" | "Suplente";
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

export const vereadores: Vereador[] = [
  { nome: "Adriano Oliveira",    partido: "PSD",       situacao: "Titular" },
  { nome: "Augusto Prado",       partido: "Republicanos", situacao: "Titular" },
  { nome: "Carlos Bôa Sorte",    partido: "PL",        situacao: "Titular" },
  { nome: "Cida Falabella",      partido: "PSOL",      situacao: "Titular" },
  { nome: "Delegado Renato",     partido: "PL",        situacao: "Titular" },
  { nome: "Eduardo Prado",       partido: "PSD",       situacao: "Titular" },
  { nome: "Fausto Gomes",        partido: "MDB",       situacao: "Titular" },
  { nome: "Fernando Pimentel",   partido: "PT",        situacao: "Titular" },
  { nome: "Galileu Oliveira",    partido: "União",     situacao: "Titular" },
  { nome: "Isauro Calais",       partido: "PP",        situacao: "Titular" },
  { nome: "Manoel Onofre",       partido: "Avante",    situacao: "Titular" },
  { nome: "Paulo Victor",        partido: "PL",        situacao: "Titular" },
  { nome: "Raul Oliveira",       partido: "PSD",       situacao: "Titular" },
  { nome: "Rogério Possidônio",  partido: "Solidariedade", situacao: "Titular" },
  { nome: "Saulo Guimarães",     partido: "Republicanos", situacao: "Titular" },
  { nome: "Sílvio Costa",        partido: "PP",        situacao: "Titular" },
  { nome: "Thiago Carvalho",     partido: "PSDB",      situacao: "Titular" },
  { nome: "Vanderlei Leite",     partido: "PL",        situacao: "Titular" },
  { nome: "Vera Rodrigues",      partido: "PT",        situacao: "Titular" },
  { nome: "Zito Rodrigues",      partido: "MDB",       situacao: "Titular" },
  { nome: "Zuleide Faria",       partido: "PSD",       situacao: "Titular" },
];

export const producaoLegislativa: ProducaoLegislativa[] = [
  { ano: 2019, projetos: 312, aprovados: 198 },
  { ano: 2020, projetos: 287, aprovados: 176 },
  { ano: 2021, projetos: 334, aprovados: 214 },
  { ano: 2022, projetos: 298, aprovados: 189 },
  { ano: 2023, projetos: 341, aprovados: 221 },
];

export const gastosCamara: GastoCamara[] = [
  { ano: 2019, orcamento: 68_000_000 },
  { ano: 2020, orcamento: 71_000_000 },
  { ano: 2021, orcamento: 74_500_000 },
  { ano: 2022, orcamento: 79_000_000 },
  { ano: 2023, orcamento: 84_200_000 },
];

// Agrupa vereadores por partido para o gráfico
export function vereradoresPorPartido(): { partido: string; total: number; cor: string }[] {
  const cores: Record<string, string> = {
    PSD: "#2563EB", PL: "#DC2626", Republicanos: "#D97706",
    PP: "#7C3AED", MDB: "#059669", PT: "#EF4444",
    PSOL: "#10B981", União: "#F59E0B", Avante: "#6366F1",
    Solidariedade: "#EC4899", PSDB: "#14B8A6",
  };

  const contagem: Record<string, number> = {};
  vereadores.forEach((v) => {
    contagem[v.partido] = (contagem[v.partido] ?? 0) + 1;
  });

  return Object.entries(contagem)
    .map(([partido, total]) => ({ partido, total, cor: cores[partido] ?? "#6B7280" }))
    .sort((a, b) => b.total - a.total);
}