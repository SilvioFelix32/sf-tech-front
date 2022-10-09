export interface IProductPrices {
  company_id: string;
  description: string;
  final_date: string;
  initial_date: string;
  price_table_id: string;
  products: {
    created_at: string;
    descount_value: number;
    item_price_id: string;
    price_table_id: string;
    product_id: string;
    updated_at: string;
    value: number;
  }[];
}
