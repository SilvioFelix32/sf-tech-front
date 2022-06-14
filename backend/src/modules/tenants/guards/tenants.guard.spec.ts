/* eslint-disable prettier/prettier */
import { TenantsGuard } from './tenants.guard';

describe('TenantGuard', () => {
  it('should be defined', () => {
    expect(new TenantsGuard()).toBeDefined();
  });
});
