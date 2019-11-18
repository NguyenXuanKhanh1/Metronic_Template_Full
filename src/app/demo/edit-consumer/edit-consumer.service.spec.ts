import { TestBed } from '@angular/core/testing';

import { EditConsumerService } from './edit-consumer.service';

describe('EditConsumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditConsumerService = TestBed.get(EditConsumerService);
    expect(service).toBeTruthy();
  });
});
