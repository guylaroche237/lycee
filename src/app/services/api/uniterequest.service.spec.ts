import { TestBed } from '@angular/core/testing';

import { UniterequestService } from './uniterequest.service';

describe('UniterequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniterequestService = TestBed.get(UniterequestService);
    expect(service).toBeTruthy();
  });
});
