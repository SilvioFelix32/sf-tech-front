export interface ISaleItem {
  category_id: string;
  product_id: string;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  url_banner: string;
  quantity: number;
  total_value: number;
}

export interface ICreateSaleRequest {
  total: number;
  items: ISaleItem[];
}

export interface ISale {
  sale_id: string;
  company_id: string;
  user_id: string;
  total: number;
  items: ISaleItem[];
  created_at: string;
  updated_at?: string;
}

