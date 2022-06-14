/* eslint-disable prettier/prettier */
import { QueryPaginateDto } from 'src/shared/dto/query-paginate.dto';
import {
  IsBooleanString,
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class QueryUserDto extends QueryPaginateDto {
  @IsString()
  @IsOptional()
  document?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  cep?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  neighborhood?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsOptional()
  @IsBooleanString()
  active?: string;
}
