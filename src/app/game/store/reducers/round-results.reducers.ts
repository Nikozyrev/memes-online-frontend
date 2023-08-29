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
      roundResultsActions.selectWinner,
      (state, { meme }): IRoundResultsState => ({
        ...state,
        roundWinner: meme,
      })
    )
  ),
});

export const { name: roundResultsFeatureKey, reducer: roundResultsReducer } =
  roundResultsFeature;
