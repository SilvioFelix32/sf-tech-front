import { StockLevel } from "../interfaces";

export function getStockLevelLabel(level: StockLevel | undefined): string {
  const labels: Record<StockLevel, string> = {
    OutOfStock: "Zerado",
    Low: "Baixo",
    Medium: "Médio",
    High: "Alto",
  };
  return level ? labels[level] ?? level : "-";
}

const STOCK_LEVEL_ORDER: Record<StockLevel, number> = {
  OutOfStock: 0,
  Low: 1,
  Medium: 2,
  High: 3,
};

export function getStockLevelOrder(level: StockLevel | undefined): number {
  return level != null ? STOCK_LEVEL_ORDER[level] ?? -1 : -1;
}
