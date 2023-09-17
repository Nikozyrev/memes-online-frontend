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

export const selectIsUser = createSelector(selectUser, (state) => !!state);

export const selectUserId = createSelector(selectUser, (state) => state?.id);

export const selectSessionId = createSelector(
  selectGameStatusState,
  (state) => state.sessionId
);

export const selectIsPaused = createSelector(
  selectGameStatusState,
  (state) => state.paused
);

export const selectIsEnded = createSelector(
  selectGameStatusState,
  (state) => state.ended
);

export const selectError = createSelector(
  selectGameStatusState,
  (state) => state.error
);

export const selectIsInGame = createSelector(
  selectSessionId,
  selectIsPaused,
  selectIsEnded,
  (sessionId, isPaused, isEnded) => !!sessionId && !isPaused && !isEnded
);
