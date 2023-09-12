import { createFeature, createReducer, on } from '@ngrx/store';
import { IGameStatusState } from '../models/game-status.model';
import { socketActions } from '../actions/socket.actions';

const initialState: IGameStatusState = {
  connected: false,
  user: null,
  error: null,
  sessionId: null,
  paused: true,
  ended: false,
};

const gameStatusFeature = createFeature({
  name: 'gameStatus',
  reducer: createReducer(
    initialState,
    on(
      socketActions.connected,
      (state): IGameStatusState => ({ ...state, connected: true })
    ),
    on(
      socketActions.disconnected,
      (state): IGameStatusState => ({ ...state, connected: false })
    ),
    on(
      socketActions.attachUserSuccess,
      (state, { user }): IGameStatusState => ({ ...state, user })
    ),
    on(
      socketActions.createSessionSuccess,
      (state, { session }): IGameStatusState => ({
        ...state,
        sessionId: session.id,
      })
    ),
    on(
      socketActions.joinSessionSuccess,
      (state, { session }): IGameStatusState => ({
        ...state,
        sessionId: session.id,
      })
    ),
    on(
      socketActions.getGameStatusSuccess,
      (state, { gameStatus }): IGameStatusState => ({
        ...state,
        ...gameStatus,
      })
    )
  ),
});

export const { name: gameStatusFeatureKey, reducer: gameStatusReducer } =
  gameStatusFeature;
