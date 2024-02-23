import { Component, Signal, inject } from '@angular/core';
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
  private store = inject(Store);

  public situations: Signal<ISituation[]> = this.store.selectSignal(selectSituations);

  public selectSituation(situation: ISituation) {
    this.store.dispatch(situationsActions.selectSituation({ situation }));
  }
}
