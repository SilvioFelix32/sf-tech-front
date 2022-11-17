import { v4 as uuidv4 } from 'uuid';
import { ProductType } from './product-type';

export const productsSeed = [
  {
    product_type: ProductType.COMPUTER,
    sku: uuidv4(),
    title: 'computer',
    subtitle: 'computer',
    description: 'computer',
    url_banner: null,
    value: 1000.0,
    discount: 10.0,
    active: true,
    combo: false,
    highlighted: false,
    for_sale: true,
  },
];
