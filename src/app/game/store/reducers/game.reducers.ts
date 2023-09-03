import { combineReducers } from '@ngrx/store';
import {
  gameStatusFeatureKey,
  gameStatusReducer,
} from './game-status.reducers';
import { gameInfoFeatureKey, gameInfoReducer } from './game-info.reducers';
import {
  playerMemesFeatureKey,
  playerMemesReducer,
} from './player-memes.reducers';
import { situationsFeatureKey, situationsReducer } from './situations.reducers';
import {
  roundResultsFeatureKey,
  roundResultsReducer,
} from './round-results.reducers';

export const gameReducer = combineReducers({
  [gameStatusFeatureKey]: gameStatusReducer,
  [gameInfoFeatureKey]: gameInfoReducer,
  [playerMemesFeatureKey]: playerMemesReducer,
  [situationsFeatureKey]: situationsReducer,
  [roundResultsFeatureKey]: roundResultsReducer,
});
