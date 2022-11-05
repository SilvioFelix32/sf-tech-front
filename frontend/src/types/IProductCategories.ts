import { IProduct } from "./IProducts";

export enum ProductType {
  COMPUTER = "COMPUTER",
  NOTEBOOK = "NOTEBOOK",
  CELL = "CELL",
  MOUSE = "MOUSE",
  KEYBOARD = "KEYBOARD",
  SOUND_PHONE = "SOUND_PHONE",
  PRINTER = "PRINTER",
  MONITOR = "MONITOR",
  PERIPHERAL = "PERIPHERAL",
  USB = "USB",
  OTHERS = "OTHERS",
}

export interface IProductCategories {
  category_id: string;
  company_id: string;
  product_type: ProductType;
  config_type_id: string;
  title: string;
  description: string;
  active: boolean;

  products: IProduct[];
}
