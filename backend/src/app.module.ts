import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PrismaService } from './shared/prisma/prisma.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { ProductModule } from './product/modules/product.module';
import { ProductCategoriesModule } from './product-categories/modules/product-categories.module';
import { SalesModule } from './sales/modules/sales.module';
import { AuthModule } from './auth/modules/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    CompaniesModule,
    UsersModule,
    ProductModule,
    ProductCategoriesModule,
    SalesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
