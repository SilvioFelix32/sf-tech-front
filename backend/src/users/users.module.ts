import { Module } from '@nestjs/common';
import { UsersController } from './infra/users.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UsersService } from './services/users.service';
import { CompaniesService } from 'src/companies/services/companies.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CompaniesService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
