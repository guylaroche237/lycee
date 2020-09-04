import { TestBed } from '@angular/core/testing';

import { ClasserequestService } from './classerequest.service';

describe('ClasserequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasserequestService = TestBed.get(ClasserequestService);
    expect(service).toBeTruthy();
  });
});
