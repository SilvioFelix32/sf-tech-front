import { Test, TestingModule } from '@nestjs/testing';
import { ProductTablePricesService } from './product-table-prices.service';

describe('ProductTablePricesService', () => {
  let service: ProductTablePricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTablePricesService],
    }).compile();

    service = module.get<ProductTablePricesService>(ProductTablePricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
