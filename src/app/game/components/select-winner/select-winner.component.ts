import { Component, Input, Signal, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import { selectRoundResultsState } from '../../store/selectors/round-results.selectors';
import { roundResultsActions } from '../../store/actions/round-results.actions';
import { IRoundResultsState } from '../../store/models/round-results-state.model';

@Component({
  selector: 'app-select-winner',
  templateUrl: './select-winner.component.html',
  styleUrls: ['./select-winner.component.scss'],
})
export class SelectWinnerComponent {
  @Input({ required: true })
  public canSelect!: boolean;

  public roundState: Signal<IRoundResultsState>;

  public roundMemes = computed(() => this.roundState().roundMemes);

  public roundWinnerId = computed(() => this.roundState().roundWinner?.meme.id);

  public roundPreWinnerId = computed(
    () => this.roundState().roundPreWinner?.meme.id
  );

  public noMemes = computed(() => !this.roundState().roundMemes.length);

  constructor(private store: Store) {
    this.roundState = this.store.selectSignal(selectRoundResultsState);
  }

  public selectWinner(meme: IMeme) {
    if (!this.canSelect) {
      console.log('Нельзя выбирать победителя.');
      return;
    }

    this.store.dispatch(roundResultsActions.selectWinner({ meme }));
  }
}
