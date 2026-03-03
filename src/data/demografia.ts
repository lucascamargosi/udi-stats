export interface DemografiaAnual {
  ano: number;
  populacao: number;
}

export interface FaixaEtaria {
  faixa: string;
  masculino: number;
  feminino: number;
}

export const populacaoHistorica: DemografiaAnual[] = [
  { ano: 2010, populacao: 604013 },
  { ano: 2011, populacao: 617518 },
  { ano: 2012, populacao: 630104 },
  { ano: 2013, populacao: 642352 },
  { ano: 2014, populacao: 654681 },
  { ano: 2015, populacao: 669526 },
  { ano: 2016, populacao: 676613 },
  { ano: 2017, populacao: 683247 },
  { ano: 2018, populacao: 691305 },
  { ano: 2019, populacao: 699097 },
  { ano: 2020, populacao: 706597 },
  { ano: 2021, populacao: 713224 },
  { ano: 2022, populacao: 724036 },
  { ano: 2023, populacao: 736959 },
];

export const piramideEtaria: FaixaEtaria[] = [
  { faixa: "0–4",   masculino: 24500, feminino: 23800 },
  { faixa: "5–9",   masculino: 25100, feminino: 24400 },
  { faixa: "10–14", masculino: 26200, feminino: 25600 },
  { faixa: "15–19", masculino: 27100, feminino: 26500 },
  { faixa: "20–24", masculino: 31400, feminino: 30900 },
  { faixa: "25–29", masculino: 34200, feminino: 33800 },
  { faixa: "30–34", masculino: 33900, feminino: 33500 },
  { faixa: "35–39", masculino: 32100, feminino: 32400 },
  { faixa: "40–44", masculino: 29800, feminino: 30600 },
  { faixa: "45–49", masculino: 27300, feminino: 28700 },
  { faixa: "50–54", masculino: 24100, feminino: 26200 },
  { faixa: "55–59", masculino: 20800, feminino: 23400 },
  { faixa: "60–64", masculino: 16900, feminino: 19800 },
  { faixa: "65–69", masculino: 13200, feminino: 16100 },
  { faixa: "70–74", masculino: 9800,  feminino: 12600 },
  { faixa: "75+",   masculino: 10200, feminino: 15400 },
];