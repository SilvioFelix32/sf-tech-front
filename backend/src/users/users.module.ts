import { Module } from '@nestjs/common';
import { UsersController } from './infra/users.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UsersService } from './services/users.service';
import { CompaniesService } from 'src/companies/services/companies.service';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [CompaniesService, PrismaService, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
