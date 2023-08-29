import { createFeature, createReducer, on } from '@ngrx/store';
import { IPlayerMemesState } from '../models/player-memes-state.model';
import { playerMemesActions } from '../actions/player-memes.actions';

const initialState: IPlayerMemesState = {
  memesHand: [],
  selectedMeme: null,
};

const playerMemesFeature = createFeature({
  name: 'playerMemes',
  reducer: createReducer(
    initialState,
    on(
      playerMemesActions.getMemesSuccess,
      (state, { memes }): IPlayerMemesState => ({ ...state, memesHand: memes })
    ),
    on(
      playerMemesActions.selectMeme,
      (state, { meme }): IPlayerMemesState => ({ ...state, selectedMeme: meme })
    )
  ),
});

export const { name: playerMemesFeatureKey, reducer: playerMemesReducer } =
  playerMemesFeature;
