/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';
import { UsersService } from './services/users.service';

import { UsersController } from './infra/http/users.controller';
import { UsersRepository } from './infra/prisma/repositories/users.repository';
import { USERS_REPOSITORY_SERVICE } from './repositories/users.repository.interface';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      // You can switch useClass to different implementation
      useClass: UsersRepository,
      provide: USERS_REPOSITORY_SERVICE,
    },
  ],
  exports: [
    UsersService,
    {
      // You can switch useClass to different implementation
      useClass: UsersRepository,
      provide: USERS_REPOSITORY_SERVICE,
    },
  ],
})
export class UsersModule {}
