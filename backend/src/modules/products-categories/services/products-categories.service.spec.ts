/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsCategoriesService } from './products-categories.service';

describe('ProductsCategoriesService', () => {
  let service: ProductsCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsCategoriesService],
    }).compile();

    service = module.get<ProductsCategoriesService>(ProductsCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
