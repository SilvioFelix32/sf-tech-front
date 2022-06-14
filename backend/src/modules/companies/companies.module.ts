/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from '../../shared/infra/prisma/prisma.service';
import { CompaniesService } from './services/companies.service';
import { CompaniesController } from './infra/http/companies.controller';
import { CompaniesRepository } from './infra/prisma/repositories/companies.repository';
import { COMPANIES_REPOSITORY_SERVICE } from './repositories/companies.repository.interface';

@Module({
  controllers: [CompaniesController],
  providers: [
    PrismaService,
    CompaniesService,
    {
      // You can switch useClass to different implementation
      useClass: CompaniesRepository,
      provide: COMPANIES_REPOSITORY_SERVICE,
    },
  ],
  exports: [
    CompaniesService,
    {
      // You can switch useClass to different implementation
      useClass: CompaniesRepository,
      provide: COMPANIES_REPOSITORY_SERVICE,
    },
  ],
})
export class CompaniesModule {}
