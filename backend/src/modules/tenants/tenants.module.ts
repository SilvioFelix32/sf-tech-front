/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../../shared/infra/prisma/prisma.service';
import { CompaniesModule } from '../companies/companies.module';
import { CompaniesService } from '../companies/services/companies.service';
import { TenantsGuard } from './guards/tenants.guard';
import { TenantsService } from './services/tenants.service';

@Global()
@Module({
  imports: [CompaniesModule],
  providers: [TenantsService, TenantsGuard, CompaniesService, PrismaService],
  exports: [TenantsService],
})
export class TenantsModule {}
