import { Test, TestingModule } from '@nestjs/testing';
import { ProductTablePricesService } from '../services/product-table-prices.service';
import { ProductTablePricesController } from './product-table-prices.controller';

describe('ProductTablePricesController', () => {
  let controller: ProductTablePricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTablePricesController],
      providers: [ProductTablePricesService],
    }).compile();

    controller = module.get<ProductTablePricesController>(
      ProductTablePricesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
