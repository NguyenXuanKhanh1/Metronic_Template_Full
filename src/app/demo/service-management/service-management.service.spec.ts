import { TestBed } from '@angular/core/testing';

import { ServiceManagementService } from './service-management.service';

describe('ServiceManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceManagementService = TestBed.get(ServiceManagementService);
    expect(service).toBeTruthy();
  });
});
