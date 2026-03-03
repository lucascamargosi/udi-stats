export interface OrcamentoAnual {
  ano: number;
  receita: number;
  despesa: number;
}

export interface DespesaSecretaria {
  secretaria: string;
  valor: number;
  cor: string;
}

export interface ReceitaFonte {
  fonte: string;
  valor: number;
  cor: string;
}

export const orcamentoHistorico: OrcamentoAnual[] = [
  { ano: 2018, receita: 3_100_000_000, despesa: 2_980_000_000 },
  { ano: 2019, receita: 3_380_000_000, despesa: 3_240_000_000 },
  { ano: 2020, receita: 3_620_000_000, despesa: 3_580_000_000 },
  { ano: 2021, receita: 4_100_000_000, despesa: 3_890_000_000 },
  { ano: 2022, receita: 4_580_000_000, despesa: 4_320_000_000 },
  { ano: 2023, receita: 4_950_000_000, despesa: 4_710_000_000 },
];

export const despesaPorSecretaria: DespesaSecretaria[] = [
  { secretaria: "Saúde",          valor: 1_320_000_000, cor: "#DC2626" },
  { secretaria: "Educação",       valor: 1_180_000_000, cor: "#2563EB" },
  { secretaria: "Infraestrutura", valor:   680_000_000, cor: "#D97706" },
  { secretaria: "Assistência",    valor:   420_000_000, cor: "#059669" },
  { secretaria: "Administração",  valor:   380_000_000, cor: "#7C3AED" },
  { secretaria: "Outras",         valor:   730_000_000, cor: "#6B7280" },
];

export const receitaPorFonte: ReceitaFonte[] = [
  { fonte: "Transferências",   valor: 1_980_000_000, cor: "#2563EB" },
  { fonte: "Tributária",       valor: 1_650_000_000, cor: "#059669" },
  { fonte: "Outras receitas",  valor:   820_000_000, cor: "#D97706" },
  { fonte: "Serviços",         valor:   500_000_000, cor: "#7C3AED" },
];