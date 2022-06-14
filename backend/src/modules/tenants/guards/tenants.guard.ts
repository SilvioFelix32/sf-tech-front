/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TenantsService } from '../services/tenants.service';

@Injectable()
export class TenantsGuard implements CanActivate {
  constructor(private tenantsService: TenantsService) {}

  private async validate(): Promise<boolean> {
    const tenant = await this.tenantsService.tenant();
    return !!tenant;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const params = request.params;

    if (!params || !params.tenant) {
      return false;
    }

    this.tenantsService.setTenant(params.tenant);

    return this.validate();
  }
}
