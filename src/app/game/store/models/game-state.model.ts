import { gameInfoFeatureKey } from '../reducers/game-info.reducers';
import { playerMemesFeatureKey } from '../reducers/player-memes.reducers';
import { roundResultsFeatureKey } from '../reducers/round-results.reducers';
import { situationsFeatureKey } from '../reducers/situations.reducers';
import { IGameInfoState } from './game-info.model';
import { IPlayerMemesState } from './player-memes-state.model';
import { IRoundResultsState } from './round-results-state.model';
import { ISituationsState } from './situations-state.model';

export interface IGameState {
  [gameInfoFeatureKey]: IGameInfoState;
  [playerMemesFeatureKey]: IPlayerMemesState;
  [situationsFeatureKey]: ISituationsState;
  [roundResultsFeatureKey]: IRoundResultsState;
}
