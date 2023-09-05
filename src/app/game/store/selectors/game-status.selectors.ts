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

export const selectUser = createSelector(
  selectGameStatusState,
  (state) => state.user
);

export const selectSessionId = createSelector(
  selectGameStatusState,
  (state) => state.sessionId
);
