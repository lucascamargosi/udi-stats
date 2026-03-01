export interface EconomiaAnual {
  ano: number;
  pib: number;        // em reais
  pibPerCapita: number;
}

export const economiaHistorica: EconomiaAnual[] = [
  { ano: 2010, pib: 18_200_000_000, pibPerCapita: 30_130 },
  { ano: 2011, pib: 20_100_000_000, pibPerCapita: 32_560 },
  { ano: 2012, pib: 22_400_000_000, pibPerCapita: 35_540 },
  { ano: 2013, pib: 25_100_000_000, pibPerCapita: 39_060 },
  { ano: 2014, pib: 27_300_000_000, pibPerCapita: 41_690 },
  { ano: 2015, pib: 28_900_000_000, pibPerCapita: 43_160 },
  { ano: 2016, pib: 29_400_000_000, pibPerCapita: 43_470 },
  { ano: 2017, pib: 31_200_000_000, pibPerCapita: 45_660 },
  { ano: 2018, pib: 33_800_000_000, pibPerCapita: 48_890 },
  { ano: 2019, pib: 36_100_000_000, pibPerCapita: 51_640 },
  { ano: 2020, pib: 35_200_000_000, pibPerCapita: 49_820 },
  { ano: 2021, pib: 39_500_000_000, pibPerCapita: 55_380 },
];