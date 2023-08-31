import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ISituation } from '../../models/situation.model';
import { selectSituationsToSelect } from '../../store/selectors/situations.selectors';
import { situationsActions } from '../../store/actions/situations.actions';
import { selectSituations } from '../../store/selectors/game-info.selectors';

@Component({
  selector: 'app-select-situation',
  templateUrl: './select-situation.component.html',
  styleUrls: ['./select-situation.component.scss'],
})
export class SelectSituationComponent implements OnInit {
  situations: Observable<ISituation[]> = this.store.select(selectSituations);

  constructor(private store: Store) {}

  selectSituation(situation: ISituation) {
    this.store.dispatch(situationsActions.selectSituation({ situation }));
  }

  ngOnInit(): void {
    // this.store.dispatch(situationsActions.getSituationsToSelect());
  }
}
