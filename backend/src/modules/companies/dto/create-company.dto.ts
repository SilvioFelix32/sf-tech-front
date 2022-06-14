/* eslint-disable prettier/prettier */
import { Company } from '../entities/company.entity';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CreateCompanyParamsDto } from './create-company-params.dto';
import { Type } from 'class-transformer';

export class CreateCompanyDto extends Company {
  @IsUUID()
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  cnpj: string;

  @IsString()
  fantasy_name?: string;

  @IsString()
  celphone1: string;

  @IsOptional()
  celphone2?: string;

  @IsEmail()
  email: string;

  @IsString()
  url_banner?: string;

  @IsOptional()
  url_site?: string;

  @IsOptional()
  url_facebook?: string;

  @IsOptional()
  url_instagram?: string;

  @IsOptional()
  url_linkedin?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateCompanyParamsDto)
  params?: CreateCompanyParamsDto;

  created_at?: string | Date;

  updated_at?: string | Date;
}
