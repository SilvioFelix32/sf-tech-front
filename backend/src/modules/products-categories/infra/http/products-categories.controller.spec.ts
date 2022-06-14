/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsCategoriesService } from '../../services/products-categories.service';
import { ProductsCategoriesController } from './products-categories.controller';

describe('ProductsCategoriesController', () => {
  let controller: ProductsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsCategoriesController],
      providers: [ProductsCategoriesService],
    }).compile();

    controller = module.get<ProductsCategoriesController>(
      ProductsCategoriesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
