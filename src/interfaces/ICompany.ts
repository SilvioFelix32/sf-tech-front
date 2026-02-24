export type CompanyStatus = "ACTIVE" | "INACTIVE";

export interface ICompany {
  id?: string;
  name: string;
  fantasyName?: string;
  email: string;
  cnpj?: string;
  status?: CompanyStatus;
  urlBanner?: string;

  createdAt?: string | Date;
  updatedAt?: string | Date;
}
