import { createSelector } from '@ngrx/store';
import { selectMemesState } from '../reducers/memes.reducers';

export const selectMemesHand = createSelector(
  selectMemesState,
  (state) => state.memesHand
);
