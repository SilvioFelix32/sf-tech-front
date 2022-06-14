/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Company } from '../../../entities/company.entity';
import { QueryCompanyDto } from 'src/modules/companies/dto/query-company.dto';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';
import { UpdateCompanyDto } from '../../../dto/update-company.dto';
import { CreateCompanyDto } from '../../../dto/create-company.dto';
import ICompaniesRepository from '../../../repositories/companies.repository.interface';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CompaniesRepository implements ICompaniesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCompanyDto): Promise<Company> {
    const { params } = data;

    if (params) {
      delete data.params;

      const ajustedData: any = {
        ...data,
        params: {
          create: params,
        },
      };

      return this.prisma.company.create({
        data: ajustedData,
        include: {
          params: true,
        },
      });
    } else {
      return this.prisma.company.create({
        data,
        include: {
          params: true,
        },
      });
    }
  }

  async findAll(query: QueryCompanyDto): Promise<IRespFindAllPaginateDto> {
    const { cnpj, name, fantasy_name, page, limit } = query;

    const where = {
      ...(cnpj && { cnpj }),

      ...(name && {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      }),

      ...(fantasy_name && {
        fantasy_name: {
          contains: fantasy_name,
          mode: 'insensitive',
        },
      }),
    };

    const orderBy = [{ name: 'asc' }];

    return await this.prisma.paginate({
      prismaModel: this.prisma.company,
      where,
      orderBy,
      page,
      limit,
    });
  }

  async findOne(id: string): Promise<Company> {
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        params: true,
      },
    });
  }

  async findOneByCnpj(cnpj: string): Promise<Company> {
    const id = cnpj;
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        company_params: true,
      },
    });
  }

  async update(id: string, data: UpdateCompanyDto): Promise<Company> {
    const { params } = data;

    if (params) {
      delete data.params;

      const ajustedData: PrismaClient = {
        ...data,
        params: {
          upsert: {
            update: { ...params },
            create: { ...params },
          },
        },
      };

      return this.prisma.company.update({
        where: { id },
        data: ajustedData,
        include: {
          params: true,
        },
      });
    } else {
      return this.prisma.company.update({
        where: { id },
        data,
        include: {
          params: true,
        },
      });
    }
  }

  async remove(id: string): Promise<void> {
    await this.prisma.company.delete({ where: { id } });

    return null;
  }
}
