export interface OrcamentoAnual {
  ano: number;
  receita: number;   // em reais
  despesa: number;   // em reais
}

export const orcamentoHistorico: OrcamentoAnual[] = [
  { ano: 2018, receita: 3_100_000_000, despesa: 2_980_000_000 },
  { ano: 2019, receita: 3_380_000_000, despesa: 3_240_000_000 },
  { ano: 2020, receita: 3_620_000_000, despesa: 3_580_000_000 },
  { ano: 2021, receita: 4_100_000_000, despesa: 3_890_000_000 },
  { ano: 2022, receita: 4_580_000_000, despesa: 4_320_000_000 },
  { ano: 2023, receita: 4_950_000_000, despesa: 4_710_000_000 },
];