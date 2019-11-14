import { TestBed } from '@angular/core/testing';

import { PostServiceService } from './post-service.service';

describe('PostServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostServiceService = TestBed.get(PostServiceService);
    expect(service).toBeTruthy();
  });
});
