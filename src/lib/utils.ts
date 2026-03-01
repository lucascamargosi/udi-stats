// formata número para padrão brasileiro: 1234567 > "1.234.567"
export function formatNumber(value: number): string {
  return value.toLocaleString('pt-br');
}

// formata valor monetário: 1234567 > "1,23 bi"
export function formatCurrency(value: number): string {
  if (value >= 1_000_000_000) {
    return `R$ ${(value / 1_000_000_000).toFixed(2).replace('.', ',')} bi`;
  }
  if (value >= 1_000_000) {
    return `R$ ${(value / 1_000_000).toFixed(2).replace('.', ',')} mi`;
  }
  return `R$ ${value.toLocaleString('pt-br')}`;
}

// calculo da variação percentural entre dois valores
export function calcVariation(current: number, previous: number): number {
  return parseFloat((((current - previous) / previous) * 100).toFixed(2));
}

// retona os últimos N itens do array
export function lastN<T>(array: T[], n: number): T[] {
  return array.slice(-n);
}
