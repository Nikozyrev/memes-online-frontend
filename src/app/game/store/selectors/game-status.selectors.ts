import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';

export const selectGameStatusState = createSelector(
  selectGameState,
  (state) => state.gameStatus
);

export const selectIsConnected = createSelector(
  selectGameStatusState,
  (state) => state.connected
);
