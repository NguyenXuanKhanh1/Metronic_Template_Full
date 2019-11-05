import { TestBed } from '@angular/core/testing';

import { DashboardFakeService } from './dashboard-fake.service';

describe('DashboardFakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardFakeService = TestBed.get(DashboardFakeService);
    expect(service).toBeTruthy();
  });
});
