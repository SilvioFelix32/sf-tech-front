/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CompaniesService } from '../../companies/services/companies.service';
import { Company } from '../../companies/entities/company.entity';

@Injectable()
export class TenantsService {
  private _tenant: Promise<Company>;

  constructor(private readonly companiesService: CompaniesService) {}

  public setTenant(id: string) {
    this._tenant = this.companiesService.findOne(id);
  }

  public tenant(): Promise<Company> {
    return this._tenant;
  }
}
