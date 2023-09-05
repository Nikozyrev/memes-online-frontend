import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';

export const selectGameInfoState = createSelector(
  selectGameState,
  (state) => state.gameInfo
);

export const selectStage = createSelector(
  selectGameInfoState,
  (state) => state.stage
);

export const selectTimer = createSelector(
  selectGameInfoState,
  (state) => state.second
);

export const selectActiveUser = createSelector(
  selectGameInfoState,
  (state) => state.activeUser
);
