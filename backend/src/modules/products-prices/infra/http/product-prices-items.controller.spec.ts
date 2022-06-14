/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductPricesItemsController } from './product-prices-items.controller';

describe('ProductPricesItemsController', () => {
  let controller: ProductPricesItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductPricesItemsController],
    }).compile();

    controller = module.get<ProductPricesItemsController>(
      ProductPricesItemsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
