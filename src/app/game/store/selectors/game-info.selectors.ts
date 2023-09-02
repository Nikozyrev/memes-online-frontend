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

export const selectSituations = createSelector(
  selectGameInfo,
  (state) => state?.situations ?? []
);

export const selectSelectedSituation = createSelector(
  selectGameInfo,
  (state) => state?.selectedSituation ?? null
);

export const selectIsSituationSelected = createSelector(
  selectGameInfo,
  (state) => {
    if (state?.stage !== '1') return true;
    return !!state?.selectedSituation;
  }
);

export const selectHand = createSelector(
  selectGameInfo,
  (state) => state?.hand ?? []
);

export const selectSelectedMeme = createSelector(
  selectGameInfo,
  (state) => state?.selectedMeme ?? null
);

export const selectRoundMemes = createSelector(
  selectGameInfo,
  (state) => state?.selectedMemes ?? []
);

export const selectRoundWinner = createSelector(
  selectGameInfo,
  (state) => state?.winnerMeme ?? null
);
