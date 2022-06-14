/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductPricesItemsService } from './product-prices-items.service';

describe('ProductPricesItemsService', () => {
  let service: ProductPricesItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductPricesItemsService],
    }).compile();

    service = module.get<ProductPricesItemsService>(ProductPricesItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
