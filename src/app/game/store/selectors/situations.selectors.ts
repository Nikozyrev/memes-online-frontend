import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';

export const selectSituationsState = createSelector(
  selectGameState,
  (state) => state.situations
);

export const selectSituationsToSelect = createSelector(
  selectSituationsState,
  (state) => state.situationsToSelect
);

export const selectSelectedSituation = createSelector(
  selectSituationsState,
  (state) => state.selectedSituation
);

export const selectIsSituationSelected = createSelector(
  selectSituationsState,
  (state) => !!state.selectedSituation
);
