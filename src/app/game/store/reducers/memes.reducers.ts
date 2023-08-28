import { createFeature, createReducer, on } from '@ngrx/store';
import { IMemesState } from '../models/memes-state.model';
import { memesActions } from '../actions/memes.actions';

const initialState: IMemesState = {
  memesHand: [],
  selectedMeme: null,
};

const memesFeature = createFeature({
  name: 'memes',
  reducer: createReducer(
    initialState,
    on(
      memesActions.getMemesSuccess,
      (state, { memes }): IMemesState => ({ ...state, memesHand: memes })
    ),
    on(
      memesActions.selectMeme,
      (state, { meme }): IMemesState => ({ ...state, selectedMeme: meme })
    )
  ),
});

export const {
  name: memesFeatureKey,
  reducer: memesReducer,
  selectMemesState,
} = memesFeature;
