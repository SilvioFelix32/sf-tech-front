export type StockLevel = "OutOfStock" | "Low" | "Medium" | "High";

export interface IProduct {
  product_id: string;
  category_id: string;
  sku?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  urlBanner?: string;
  price?: number;
  discount?: number;
  stock?: number;
  stock_level?: StockLevel;
  highlighted?: boolean;
  active?: boolean;

  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IUpdateProduct {
  product_id?: string;
  category_id: string;
  sku?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  urlBanner?: string;
  price?: number;
  discount?: number;
  stock?: number;
  stock_level?: StockLevel;
  highlighted?: boolean;
  active?: boolean;

  createdAt?: Date | string;
  updatedAt?: Date | string;
}
