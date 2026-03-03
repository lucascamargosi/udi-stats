export interface DemografiaAnual {
  ano: number;
  populacao: number;
}

export interface FaixaEtaria {
  faixa: string;
  masculino: number;
  feminino: number;
}

// Fonte: IBGE — Censos 2010/2022 e estimativas populacionais
export const populacaoHistorica: DemografiaAnual[] = [
  { ano: 2010, populacao: 604031 },
  { ano: 2012, populacao: 634345 },
  { ano: 2014, populacao: 659928 },
  { ano: 2016, populacao: 676613 },
  { ano: 2018, populacao: 691305 },
  { ano: 2020, populacao: 706597 },
  { ano: 2022, populacao: 713232 },
  { ano: 2024, populacao: 754954 },
  { ano: 2025, populacao: 761835 },
];

// Fonte: IBGE Censo 2022 — distribuição estimada por faixa etária
export const piramideEtaria: FaixaEtaria[] = [
  { faixa: "0-4",   masculino: 23100, feminino: 22400 },
  { faixa: "5-9",   masculino: 24200, feminino: 23500 },
  { faixa: "10-14", masculino: 25100, feminino: 24300 },
  { faixa: "15-19", masculino: 25800, feminino: 25100 },
  { faixa: "20-24", masculino: 29600, feminino: 29200 },
  { faixa: "25-29", masculino: 32400, feminino: 32100 },
  { faixa: "30-34", masculino: 32100, feminino: 31800 },
  { faixa: "35-39", masculino: 30500, feminino: 30900 },
  { faixa: "40-44", masculino: 28300, feminino: 29200 },
  { faixa: "45-49", masculino: 26100, feminino: 27500 },
  { faixa: "50-54", masculino: 23000, feminino: 25100 },
  { faixa: "55-59", masculino: 19800, feminino: 22400 },
  { faixa: "60-64", masculino: 16100, feminino: 19000 },
  { faixa: "65-69", masculino: 12600, feminino: 15400 },
  { faixa: "70-74", masculino: 9300,  feminino: 12000 },
  { faixa: "75+",   masculino: 9700,  feminino: 14700 },
];