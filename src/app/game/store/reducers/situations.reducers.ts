import { createFeature, createReducer, on } from '@ngrx/store';
import { situationsActions } from '../actions/situations.actions';
import { ISituationsState } from '../models/situations-state.model';

const initialState: ISituationsState = {
  situationsToSelect: [],
};

const situationsFeature = createFeature({
  name: 'situations',
  reducer: createReducer(
    initialState,
    on(
      situationsActions.getSituationsToSelectSuccess,
      (state, { situationsToSelect }): ISituationsState => ({
        ...state,
        situationsToSelect,
      })
    )
  ),
});

export const {
  name: situationsFeatureKey,
  reducer: situationsReducer,
  selectSituationsState,
} = situationsFeature;
