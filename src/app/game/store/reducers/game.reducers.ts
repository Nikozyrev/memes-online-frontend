import { combineReducers } from '@ngrx/store';
import {
  playerMemesFeatureKey,
  playerMemesReducer,
} from './player-memes.reducers';
import { situationsFeatureKey, situationsReducer } from './situations.reducers';
import {
  roundResultsFeatureKey,
  roundResultsReducer,
} from './round-results.reducers';
import { gameInfoFeatureKey, gameInfoReducer } from './game-info.reducers';

export const gameReducer = combineReducers({
  [gameInfoFeatureKey]: gameInfoReducer,
  [playerMemesFeatureKey]: playerMemesReducer,
  [situationsFeatureKey]: situationsReducer,
  [roundResultsFeatureKey]: roundResultsReducer,
});
