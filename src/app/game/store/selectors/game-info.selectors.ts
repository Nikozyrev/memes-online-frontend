import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';

export const selectGameInfoState = createSelector(
  selectGameState,
  (state) => state.gameInfo
);

export const selectGameInfo = createSelector(
  selectGameInfoState,
  (state) => state.gameInfo
);

export const selectHand = createSelector(
  selectGameInfo,
  (state) => state?.hand ?? []
);

export const selectSelectedMeme = createSelector(
  selectGameInfo,
  (state) => state?.selectedMeme ?? null
);
