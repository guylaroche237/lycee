import { TestBed } from '@angular/core/testing';

import { AuthentificationrequestService } from './authentificationrequest.service';

describe('AuthentificationrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentificationrequestService = TestBed.get(AuthentificationrequestService);
    expect(service).toBeTruthy();
  });
});
