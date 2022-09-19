import { Company } from '../entities/company.entity';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
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
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsOptional()
  @IsString()
  fantasy_name?: string;

  @IsString()
  celphone1: string;

  @IsOptional()
  @IsString()
  celphone2?: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  url_banner?: string;

  @IsOptional()
  @IsString()
  url_site?: string;

  @IsOptional()
  @IsString()
  url_facebook?: string;

  @IsOptional()
  @IsString()
  url_instagram?: string;

  @IsOptional()
  @IsString()
  url_linkedin?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateCompanyParamsDto)
  company_params?: CreateCompanyParamsDto;

  @IsOptional()
  @IsString()
  @IsDate()
  created_at?: string | Date;

  @IsOptional()
  @IsString()
  @IsDate()
  updated_at?: string | Date;
}
