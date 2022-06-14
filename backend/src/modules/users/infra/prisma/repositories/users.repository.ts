/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { QueryUserDto } from 'src/modules/users/dto/query-user.dto';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
import { User } from 'src/modules/users/entities/user.entity';
import IUsersRepository from 'src/modules/users/repositories/users.repository.interface';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        user_name: data.user_name,
        password: data.password,
        ...data,
      },
    });
  }

  async findAll(
    query: QueryUserDto,
  ): Promise<IRespFindAllPaginateDto | undefined> {
    const {
      document,
      name,
      email,
      cep,
      state,
      city,
      neighborhood,
      address,
      active,
      page,
      limit,
    } = query;

    const where = {
      ...(document && { document }),
      ...(name && {
        nome: {
          contains: name,
          mode: 'insensitive',
        },
      }),

      ...(cep && { cep }),

      ...(state && {
        state: {
          contains: state,
          mode: 'insensitive',
        },
      }),

      ...(city && {
        state: {
          contains: city,
          mode: 'insensitive',
        },
      }),

      ...(neighborhood && {
        description: {
          contains: neighborhood,
          mode: 'insensitive',
        },
      }),

      ...(address && {
        description: {
          contains: address,
          mode: 'insensitive',
        },
      }),

      ...(email && { email }),

      ...(active && { active: active === 'true' ? true : false }),
    };

    const orderBy = [{ name: 'asc' }];

    return await this.prisma.paginate({
      prismaModel: this.prisma.user,
      where,
      orderBy,
      page,
      limit,
    });
  }

  async findOne(id: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateUserDto): Promise<User | undefined> {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });

    return null;
  }
}
