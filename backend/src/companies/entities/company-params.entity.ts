export type Environment = 'PRODUCTION' | 'HOMOLOGATION';

export class CompanyParams {
  id?: string;
  company_id: string;
  environment?: Environment | null;
  obs_email?: string | null;
  obs_voucher?: string | null;
  privacy_policy?: string | null;

  created_at?: Date | string;
  updated_at?: Date | string;
}
