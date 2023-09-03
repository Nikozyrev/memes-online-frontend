import { createFeature, createReducer, on } from '@ngrx/store';
import { situationsActions } from '../actions/situations.actions';
import { ISituationsState } from '../models/situations-state.model';

const initialState: ISituationsState = {
  situations: [],
  selectedSituation: null,
};

const situationsFeature = createFeature({
  name: 'situations',
  reducer: createReducer(
    initialState,
    on(
      situationsActions.getSituationsSuccess,
      (state, { situations }): ISituationsState => ({
        ...state,
        situations,
      })
    ),
    on(
      situationsActions.selectSituation,
      (state, { situation }): ISituationsState => ({
        ...state,
        selectedSituation: situation,
      })
    )
  ),
});

export const { name: situationsFeatureKey, reducer: situationsReducer } =
  situationsFeature;
