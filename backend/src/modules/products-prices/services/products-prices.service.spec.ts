/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsPricesService } from './products-prices.service';

describe('ProductsPricesService', () => {
  let service: ProductsPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsPricesService],
    }).compile();

    service = module.get<ProductsPricesService>(ProductsPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
