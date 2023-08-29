import { createFeatureSelector } from '@ngrx/store';
import { IGameState } from '../models/game-state.model';

export const gameFeatureKey = 'game';

export const selectGameState =
  createFeatureSelector<IGameState>(gameFeatureKey);
