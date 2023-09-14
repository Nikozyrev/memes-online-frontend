import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';

export const selectRoundResultsState = createSelector(
  selectGameState,
  (state) => state.roundResults
);

export const selectRoundMemes = createSelector(
  selectRoundResultsState,
  (state) => state.roundMemes
);

export const selectRoundWinner = createSelector(
  selectRoundResultsState,
  (state) => state.roundWinner
);

export const selectRoundPreWinner = createSelector(
  selectRoundResultsState,
  (state) => state.roundPreWinner
);
