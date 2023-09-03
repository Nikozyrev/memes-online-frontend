import { createSelector } from '@ngrx/store';
import { selectGameState } from './game.selectors';

export const selectPlayerMemesState = createSelector(
  selectGameState,
  (state) => state.playerMemes
);

export const selectHand = createSelector(
  selectPlayerMemesState,
  (state) => state.memesHand
);

export const selectSelectedMeme = createSelector(
  selectPlayerMemesState,
  (state) => state.selectedMeme
);
