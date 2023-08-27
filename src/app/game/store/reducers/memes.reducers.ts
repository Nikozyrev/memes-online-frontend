import { createFeature, createReducer, on } from '@ngrx/store';
import { IMemesState } from '../models/memes-state.model';
import { memesActions } from '../actions/memes.actions';

const initialState: IMemesState = {
  memesHand: [],
};

const memesFeature = createFeature({
  name: 'memes',
  reducer: createReducer(
    initialState,
    on(
      memesActions.getMemesSuccess,
      (state, { memes }): IMemesState => ({ ...state, memesHand: memes })
    )
  ),
});

export const {
  name: memesFeatureKey,
  reducer: memesReducer,
  selectMemesState,
} = memesFeature;
