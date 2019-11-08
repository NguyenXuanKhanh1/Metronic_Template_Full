import { TestBed } from '@angular/core/testing';

import { ValidationDemoService } from './validation-demo.service';

describe('ValidationDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationDemoService = TestBed.get(ValidationDemoService);
    expect(service).toBeTruthy();
  });
});
