import { Injectable } from '@angular/core';
import { ISituation } from '../../models/situation.model';

@Injectable({
  providedIn: 'root',
})
export class SituationsService {
  mockedSituations: ISituation[] = [
    { id: '1', text: 'Situation 1' },
    { id: '2', text: 'Situation 2' },
    { id: '3', text: 'Situation 3' },
    { id: '4', text: 'Situation 4' },
  ];

  constructor() {}

  getSituations() {
    return this.mockedSituations;
  }
}
