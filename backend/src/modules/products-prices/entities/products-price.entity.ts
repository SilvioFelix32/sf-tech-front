/* eslint-disable prettier/prettier */
import { ProductsPriceItem } from './products-price-items.entity';

export class ProductsPrice {
  id?: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  company_id: string;
  description: string;
  initial_date?: Date | string | null;
  final_date?: Date | string | null;
  products?: ProductsPriceItem[];
}
