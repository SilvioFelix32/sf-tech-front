/* eslint-disable prettier/prettier */
export type TypeActionExceptionProduct = 'BLOCK' | 'RELEASE';

export class ProductAvailabilityException {
  id?: string;
  date: Date | string;
  action?: TypeActionExceptionProduct;
  created_at?: Date | string;
  updated_at?: Date | string;
}
