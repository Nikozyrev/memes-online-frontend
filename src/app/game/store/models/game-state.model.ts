import { playerMemesFeatureKey } from '../reducers/player-memes.reducers';
import { situationsFeatureKey } from '../reducers/situations.reducers';
import { IPlayerMemesState } from './player-memes-state.model';
import { ISituationsState } from './situations-state.model';

export interface IGameState {
  [playerMemesFeatureKey]: IPlayerMemesState;
  [situationsFeatureKey]: ISituationsState;
}
