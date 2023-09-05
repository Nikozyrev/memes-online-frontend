import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';
import { selectUserId } from './game-status.selectors';

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

export const selectActiveUserId = createSelector(
  selectActiveUser,
  (state) => state?.id
);

export const selectIsUserActive = createSelector(
  selectUserId,
  selectActiveUserId,
  (userId, activeUserId) => !!activeUserId && userId === activeUserId
);
