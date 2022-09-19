import { Environment, CompanyParams } from '../entities/company-params.entity';
import { IsOptional, IsString } from 'class-validator';

export class CreateCompanyParamsDto extends CompanyParams {
  @IsString()
  environment: Environment;

  @IsOptional()
  @IsString()
  obs_email?: string | null;

  @IsOptional()
  @IsString()
  obs_voucher?: string | null;

  @IsOptional()
  @IsString()
  privacy_policy?: string;
}
