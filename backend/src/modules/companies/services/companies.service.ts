/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { QueryCompanyDto } from '../dto/query-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import ICompaniesRepository, {
  COMPANIES_REPOSITORY_SERVICE,
} from '../repositories/companies.repository.interface';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject(COMPANIES_REPOSITORY_SERVICE)
    private readonly repository: ICompaniesRepository,
  ) {}

  async create(data: CreateCompanyDto) {
    const findCompanyCnpj = await this.repository.findOneByCnpj(data.cnpj);
    if (findCompanyCnpj) {
      throw new HttpException(
        'CNPJ already exists in the database',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.repository.create(data);
  }

  async findAll(query: QueryCompanyDto) {
    return await this.repository.findAll(query);
  }

  async findOne(id: string) {
    const company = await this.repository.findOne(id);

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return company;
  }
  
  async update(id: string, data: UpdateCompanyDto) {
    const { cnpj } = data;

    if (cnpj) {
      const findCompanyCnpj = await this.repository.findOneByCnpj(cnpj);
      if (findCompanyCnpj && findCompanyCnpj.id !== id) {
        throw new HttpException(
          'CNPJ already exists in the database',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const findCompanyUpdate = await this.findOne(id);
    if (!findCompanyUpdate) {
      throw new HttpException('Company not found', HttpStatus.BAD_REQUEST);
    }

    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
