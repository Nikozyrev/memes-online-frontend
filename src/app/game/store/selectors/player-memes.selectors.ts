import { createSelector } from '@ngrx/store';
import { selectPlayerMemesState } from '../reducers/player-memes.reducers';

export const selectMemesHand = createSelector(
  selectPlayerMemesState,
  (state) => state.memesHand
);

export const selectSelectedMeme = createSelector(
  selectPlayerMemesState,
  (state) => state.selectedMeme
);
