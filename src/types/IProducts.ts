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
  highlighted?: boolean;
  active?: boolean;
  amount?: number;

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
  highlighted?: boolean;
  active?: boolean;
  amount?: number;

  createdAt?: Date | string;
  updatedAt?: Date | string;
}
