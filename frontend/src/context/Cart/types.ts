export type CartItemType = {
  id: number;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  product_type: string;
  order_menu: number;
  promotion: boolean;
  combo: boolean;
  age_group: string;
  url_banner: string;
  value: number;
  value_promotion: number;
  value_sale: number;
  amount?: number;
};
