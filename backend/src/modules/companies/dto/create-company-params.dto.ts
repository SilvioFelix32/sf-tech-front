/* eslint-disable prettier/prettier */
import { Environment, CompanyParams } from '../entities/company-params.entity';
import { IsOptional, IsString } from 'class-validator';

export class CreateCompanyParamsDto extends CompanyParams {
  @IsString()
  environment: Environment;

  @IsOptional()
  obs_email?: string | null;

  @IsOptional()
  obs_voucher?: string | null;

  @IsOptional()
  privacy_policy?: string;
}
