/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsPricesController } from './products-prices.controller';
import { ProductsPricesService } from '../../services/products-prices.service';

describe('ProductsPricesController', () => {
  let controller: ProductsPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsPricesController],
      providers: [ProductsPricesService],
    }).compile();

    controller = module.get<ProductsPricesController>(ProductsPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
