import { CompanyParams } from './company-params.entity';
export class Company {
  id?: string;
  name: string;
  fantasy_name?: string;
  celphone1: string;
  celphone2?: string;
  email: string;
  url_banner?: string;
  url_site?: string;
  url_facebook?: string;
  url_instagram?: string;
  url_linkedin?: string;

  company_params?: CompanyParams;

  created_at?: string | Date;
  updated_at?: string | Date;
}
