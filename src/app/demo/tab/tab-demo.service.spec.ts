import { TestBed } from '@angular/core/testing';

import { TabDemoService } from './tab-demo.service';

describe('TabDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabDemoService = TestBed.get(TabDemoService);
    expect(service).toBeTruthy();
  });
});
