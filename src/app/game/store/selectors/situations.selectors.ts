import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';

export const selectSituationsState = createSelector(
  selectGameState,
  (state) => state.situations
);

export const selectSituations = createSelector(
  selectSituationsState,
  (state) => state.situations
);

export const selectSelectedSituation = createSelector(
  selectSituationsState,
  (state) => state.selectedSituation
);

export const selectIsSituationSelected = createSelector(
  selectSituationsState,
  (state) => !!state.selectedSituation
);
