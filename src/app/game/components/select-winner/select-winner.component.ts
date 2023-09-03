import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import {
  selectRoundMemes,
  selectRoundWinner,
} from '../../store/selectors/round-results.selectors';
import { roundResultsActions } from '../../store/actions/round-results.actions';

@Component({
  selector: 'app-select-winner',
  templateUrl: './select-winner.component.html',
  styleUrls: ['./select-winner.component.scss'],
})
export class SelectWinnerComponent {
  roundState = combineLatest({
    roundMemes: this.store.select(selectRoundMemes),
    roundWinner: this.store.select(selectRoundWinner),
  });

  constructor(private store: Store) {}

  selectWinner(meme: IMeme) {
    this.store.dispatch(roundResultsActions.selectWinner({ meme }));
  }
}
