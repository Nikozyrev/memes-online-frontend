import { createFeature, createReducer, on } from '@ngrx/store';
import { IGameInfoState } from '../models/game-info.model';
import { gameInfoActions } from '../actions/game-info.actions';

const initialState: IGameInfoState = {
  stage: null,
  round: null,
  second: null,
  activeUser: null,
};

const gameInfoFeature = createFeature({
  name: 'gameInfo',
  reducer: createReducer(
    initialState,
    on(
      gameInfoActions.getInfoSuccess,
      (state, { gameInfo }): IGameInfoState => ({ ...state, ...gameInfo })
    )
  ),
});

export const { name: gameInfoFeatureKey, reducer: gameInfoReducer } =
  gameInfoFeature;
