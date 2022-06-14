/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';

import apiConfig from '../../../config/api';

export interface IQueryPaginate {
  prismaModel: any;
  where?: any;
  orderBy?: any;
  include?: any;
  page?: number;
  limit?: number;
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
      errorFormat: 'colorless',
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async paginate({
    prismaModel,
    where,
    orderBy,
    include,
    page,
    limit,
  }: IQueryPaginate): Promise<IRespFindAllPaginateDto> {
    const apiLimit = +apiConfig.response.limit;
    const current_page = page || 1;
    const take = limit || apiLimit;

    const startIndex = (current_page - 1) * take;
    const total_count = await prismaModel.count({ where });
    const total_page = Math.ceil(total_count / take);

    const last_page = current_page >= total_page;

    const paginated_data = await prismaModel.findMany({
      take,
      skip: startIndex,
      ...(where && { where }),
      ...(include && { include }),
      ...(orderBy && { orderBy }),
    });

    const result = {
      total_count,
      total_page,
      current_page,
      last_page,

      first: {
        page: 1,
        limit: take,
      },

      previous: {
        page: current_page - 1,
        limit: take,
      },

      next: {
        page: current_page + 1,
        limit: take,
      },

      last: {
        page: total_page,
        limit: take,
      },

      paginated_data,

      current_count_per_page: Object.keys(paginated_data).length,
      range: current_page * take,
    } as IRespFindAllPaginateDto;

    if (last_page) {
      result.range = total_count;
      delete result.next;
    }

    if (current_page <= 1) {
      delete result.previous;
    }

    return result;
  }
}
