/* eslint-disable prettier/prettier */
// This will be our injection token.
export const COMPANIES_REPOSITORY_SERVICE = 'COMPANIES_REPOSITORY_SERVICE';

import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { QueryCompanyDto } from '../dto/query-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../entities/company.entity';

export default interface ICompaniesRepository {
  create(data: CreateCompanyDto): Promise<Company>;
  findAll(query: QueryCompanyDto): Promise<IRespFindAllPaginateDto | undefined>;
  findOne(id: string): Promise<Company | undefined>;
  findOneByCnpj(cnpj: string): Promise<Company | undefined>;
  update(id: string, data: UpdateCompanyDto): Promise<Company | undefined>;
  remove(id: string): void;
}
