import { createReducer, on } from '@ngrx/store';
import { IMemesState } from '../memes-state.model';
import * as MemesActions from '../actions/memes.actions';

const initialState: IMemesState = {
  memesHand: [],
};

export const memesReducer = createReducer(
  initialState,
  on(
    MemesActions.getMemesSuccess,
    (state, { memes }): IMemesState => ({ ...state, memesHand: memes })
  )
);
