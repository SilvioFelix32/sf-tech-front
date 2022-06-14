/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { QueryPaginateDto } from 'src/shared/dto/query-paginate.dto';

export class QueryProductsPriceDto extends QueryPaginateDto {
  @IsOptional()
  @IsString()
  description?: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  initial_date?: Date | string | null;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  final_date?: Date | string | null;
}
