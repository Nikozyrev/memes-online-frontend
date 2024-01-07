import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISituation } from '../../models/situation.model';
import { selectSelectedSituation } from '../../store/selectors/situations.selectors';

@Component({
  selector: 'app-selected-situation',
  templateUrl: './selected-situation.component.html',
  styleUrls: ['./selected-situation.component.scss'],
})
export class SelectedSituationComponent {
  public selectedSituation: Signal<ISituation | null>;

  constructor(private store: Store) {
    this.selectedSituation = this.store.selectSignal(selectSelectedSituation);
  }
}
