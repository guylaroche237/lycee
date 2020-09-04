import { TestBed } from '@angular/core/testing';

import { MatiereCompoBySalleRequestService } from './matiere-compo-by-salle-request.service';

describe('MatiereCompoBySalleRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatiereCompoBySalleRequestService = TestBed.get(MatiereCompoBySalleRequestService);
    expect(service).toBeTruthy();
  });
});
