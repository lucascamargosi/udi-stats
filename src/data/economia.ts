export interface EconomiaAnual {
  ano: number;
  pib: number;
  pibPerCapita: number;
}

export interface PibSetorial {
  setor: string;
  valor: number;
  cor: string;
}

// Fonte: IBGE PIB Municipal — prefeitura.uberlandia.mg.gov.br
export const economiaHistorica: EconomiaAnual[] = [
  { ano: 2017, pib: 34_200_000_000, pibPerCapita: 50_500 },
  { ano: 2018, pib: 37_400_000_000, pibPerCapita: 54_800 },
  { ano: 2019, pib: 39_100_000_000, pibPerCapita: 56_200 },
  { ano: 2020, pib: 38_500_000_000, pibPerCapita: 54_500 },
  { ano: 2021, pib: 43_100_000_000, pibPerCapita: 61_000 },
  { ano: 2022, pib: 48_200_000_000, pibPerCapita: 67_600 },
  { ano: 2023, pib: 51_065_684_140, pibPerCapita: 71_598 },
];

// Fonte: IBGE — distribuição setorial do PIB (base 2021)
// Serviços 56,5% | Indústria 31,2% | Adm. Pública 9,6% | Agropecuária 2,7%
export const pibSetorial: PibSetorial[] = [
  { setor: "Serviços",        valor: 24_341_350_000, cor: "#2563EB" },
  { setor: "Indústria",       valor: 13_447_200_000, cor: "#7C3AED" },
  { setor: "Adm. Pública",    valor:  4_137_600_000, cor: "#D97706" },
  { setor: "Agropecuária",    valor:  1_163_700_000, cor: "#059669" },
];