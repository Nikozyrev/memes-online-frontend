import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  situations: Observable<ISituation[]> = this.store.select(selectSituations);

  constructor(private store: Store) {}

  selectSituation(situation: ISituation) {
    this.store.dispatch(situationsActions.selectSituation({ situation }));
  }
}
