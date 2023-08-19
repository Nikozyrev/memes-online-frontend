import { createReducer, on } from '@ngrx/store';
import { IMemesState } from '../memes-state.model';
import { memesActions } from '../actions/memes.actions';

const initialState: IMemesState = {
  memesHand: [],
};

export const memesReducer = createReducer(
  initialState,
  on(
    memesActions.getMemesSuccess,
    (state, { memes }): IMemesState => ({ ...state, memesHand: memes })
  )
);
