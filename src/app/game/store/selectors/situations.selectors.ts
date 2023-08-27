import { createSelector } from '@ngrx/store';
import { selectSituationsState } from '../reducers/situations.reducers';

export const selectSituationsToSelect = createSelector(
  selectSituationsState,
  (state) => state.situationsToSelect
);
