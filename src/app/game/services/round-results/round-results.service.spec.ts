import { TestBed } from '@angular/core/testing';

import { RoundResultsService } from './round-results.service';

describe('RoundResultsService', () => {
  let service: RoundResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoundResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
