import { ProductItemPrice } from '../../product-table-prices/entities/product-price-items.entity';

export class ProductPriceTable {
  price_table_id?: string;
  company_id?: string;
  description: string;
  initial_date?: Date;
  final_date?: Date;
  products?: any | ProductItemPrice[];

  created_at?: Date;
  updated_at?: Date;
}
