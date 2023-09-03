import { createFeature, createReducer, on } from '@ngrx/store';
import { IRoundResultsState } from '../models/round-results-state.model';
import { roundResultsActions } from '../actions/round-results.actions';

const initialState: IRoundResultsState = {
  roundMemes: [],
  roundWinner: null,
};

const roundResultsFeature = createFeature({
  name: 'roundResults',
  reducer: createReducer(
    initialState,
    on(
      roundResultsActions.getMemesSuccess,
      (state, { memes }): IRoundResultsState => ({
        ...state,
        roundMemes: memes,
      })
    ),
    on(
      roundResultsActions.getRoundWinnerSuccess,
      (state, { roundWinner }): IRoundResultsState => ({
        ...state,
        roundWinner,
      })
    )
  ),
});

export const { name: roundResultsFeatureKey, reducer: roundResultsReducer } =
  roundResultsFeature;
