import { Component, Signal, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISituation } from '../../models/situation.model';
import { selectSituations } from '../../store/selectors/situations.selectors';
import { situationsActions } from '../../store/actions/situations.actions';

@Component({
  selector: 'app-select-situation',
  templateUrl: './select-situation.component.html',
  styleUrls: ['./select-situation.component.scss'],
})
export class SelectSituationComponent {
  public situations: Signal<ISituation[]>;

  public noSituations = computed(() => !this.situations().length);

  constructor(private store: Store) {
    this.situations = this.store.selectSignal(selectSituations);
  }

  public selectSituation(situation: ISituation) {
    this.store.dispatch(situationsActions.selectSituation({ situation }));
  }
}
