import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMemesState } from '../memes-state.model';

export const memesFeatureName = 'memes';

export const selectFeature =
  createFeatureSelector<IMemesState>(memesFeatureName);

export const selectMemesHand = createSelector(
  selectFeature,
  (state) => state.memesHand
);
