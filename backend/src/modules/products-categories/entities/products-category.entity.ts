/* eslint-disable prettier/prettier */
export type ProductType =
  | 'COMPUTADOR'
  | 'NOTEBOOK'
  | 'CELULAR'
  | 'MOUSE'
  | 'TECLADO'
  | 'FONE_DE_SOM'
  | 'IMPRESSORA'
  | 'MONITOR'
  | 'PERIFERICO'
  | 'USB'
  | 'OUTROS';

export class ProductsCategory {
  id?: string;
  company_id: string;
  product_type: ProductType;
  config_type_id?: string | null;
  title: string;
  description: string;
  url_banner?: string | null;
  active?: boolean;

  created_at?: Date | string;
  updated_at?: Date | string;
}
