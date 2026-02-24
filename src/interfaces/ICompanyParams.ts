import { CompanyStatus } from "./ICompany";

export interface ICompanyParams {
  name?: string;
  fantasyName?: string;
  email?: string;
  cnpj?: string;
  status?: CompanyStatus;
  urlBanner?: string;
}
