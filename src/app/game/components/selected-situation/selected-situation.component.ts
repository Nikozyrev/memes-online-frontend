import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISituation } from '../../models/situation.model';
import { selectSelectedSituation } from '../../store/selectors/game-info.selectors';

@Component({
  selector: 'app-selected-situation',
  templateUrl: './selected-situation.component.html',
  styleUrls: ['./selected-situation.component.scss'],
})
export class SelectedSituationComponent {
  selectedSituation: Observable<ISituation | null> = this.store.select(
    selectSelectedSituation
  );

  constructor(private store: Store) {}
}
