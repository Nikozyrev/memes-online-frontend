import { TestBed } from '@angular/core/testing';

import { PlayerMemesService } from './player-memes.service';

describe('PlayerMemesService', () => {
  let service: PlayerMemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerMemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
