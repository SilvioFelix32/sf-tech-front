/* eslint-disable prettier/prettier */

import { IsOptional, IsString } from 'class-validator';
import { QueryPaginateDto } from 'src/shared/dto/query-paginate.dto';

export class QueryCompanyDto extends QueryPaginateDto {
  @IsOptional()
  @IsString()
  cnpj?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  fantasy_name?: string;
}
