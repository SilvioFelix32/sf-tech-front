import { Type } from 'class-transformer';
import { IsString, IsOptional, IsEmail, ValidateNested } from 'class-validator';
import { CreateCompanyParamsDto } from './create-company-params.dto';

export class UpdateCompanyDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  cnpj?: string;

  @IsOptional()
  @IsString()
  fantasy_name?: string;

  @IsOptional()
  @IsString()
  celphone1?: string;

  @IsOptional()
  @IsString()
  celphone2?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

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
}
