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

export const gameReducer = combineReducers({
  [playerMemesFeatureKey]: playerMemesReducer,
  [situationsFeatureKey]: situationsReducer,
  [roundResultsFeatureKey]: roundResultsReducer,
});
