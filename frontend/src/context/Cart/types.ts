export type CartItemType = {
  product_id: string;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  product_type: string;
  promotion: boolean;
  combo: boolean;
  url_banner: string;
  value: number;
  amount?: number;
};
