import { TestBed } from '@angular/core/testing';

import { AllFonctionsService } from './all-fonctions.service';

describe('AllFonctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllFonctionsService = TestBed.get(AllFonctionsService);
    expect(service).toBeTruthy();
  });
});
