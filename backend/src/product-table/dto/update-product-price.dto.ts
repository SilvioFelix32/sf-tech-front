import { PartialType } from '@nestjs/swagger';
import { CreateProductTablePriceDto } from './create-product-price.dto';

export class UpdateProductTablePriceDto extends PartialType(
  CreateProductTablePriceDto,
) {}
