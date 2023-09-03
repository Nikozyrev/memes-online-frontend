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

export const selectSessionId = createSelector(
  selectGameInfo,
  (state) => state?.sessionId
);

export const selectStage = createSelector(
  selectGameInfo,
  (state) => state?.stage
);

export const selectTimer = createSelector(
  selectGameInfo,
  (state) => state?.second
);
