import { createSelector } from '@ngrx/store';
import { selectSituationsState } from '../reducers/situations.reducers';

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
