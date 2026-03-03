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

// Fonte: IBGE Cidades — ibge.gov.br/cidades-e-estados/mg/uberlandia
export const orcamentoHistorico: OrcamentoAnual[] = [
  { ano: 2019, receita: 3_280_000_000, despesa: 3_150_000_000 },
  { ano: 2020, receita: 3_560_000_000, despesa: 3_490_000_000 },
  { ano: 2021, receita: 4_020_000_000, despesa: 3_810_000_000 },
  { ano: 2022, receita: 4_380_000_000, despesa: 4_190_000_000 },
  { ano: 2023, receita: 4_620_000_000, despesa: 4_430_000_000 },
  { ano: 2024, receita: 4_504_632_618, despesa: 4_758_850_443 },
];

// Fonte: Portal da Transparência de Uberlândia — distribuição estimada 2024
export const despesaPorSecretaria: DespesaSecretaria[] = [
  { secretaria: "Saúde",          valor: 1_380_000_000, cor: "#DC2626" },
  { secretaria: "Educação",       valor: 1_190_000_000, cor: "#2563EB" },
  { secretaria: "Infraestrutura", valor:   620_000_000, cor: "#D97706" },
  { secretaria: "Assistência",    valor:   390_000_000, cor: "#059669" },
  { secretaria: "Administração",  valor:   420_000_000, cor: "#7C3AED" },
  { secretaria: "Outras",         valor:   758_850_443, cor: "#6B7280" },
];

// Fonte: Portal da Transparência de Uberlândia — distribuição estimada 2024
export const receitaPorFonte: ReceitaFonte[] = [
  { fonte: "Transferências",  valor: 1_801_853_047, cor: "#2563EB" },
  { fonte: "Tributária",      valor: 1_351_388_785, cor: "#059669" },
  { fonte: "Outras receitas", valor:   900_925_724, cor: "#D97706" },
  { fonte: "Serviços",        valor:   450_462_862, cor: "#7C3AED" },
];