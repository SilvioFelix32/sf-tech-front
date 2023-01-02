export type Environment = "PRODUCTION" | "HOMOLOGATION";

export interface ICompany {
  id?: string;
  name: string;
  document: string;
  fantasy_name?: string;
  phone?: string;
  cellphone: string;
  email: string;
  url_banner?: string;
  url_site?: string;
  url_facebook?: string;
  url_instagram?: string;
  url_linkedin?: string;

  company_params?: {
    id?: string;
    company_id: string;
    environment?: Environment | null;
    url_banner?: string | null;
    url_site?: string | null;
    url_facebook?: string | null;
    url_instagram?: string | null;
    url_linkedin?: string | null;
    obs_email?: string | null;
    obs_voucher?: string | null;
    privacy_policy?: string | null;
  };

  created_at?: string | Date;
  updated_at?: string | Date;
}
