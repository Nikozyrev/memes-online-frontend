import { createAction, props } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';

const source = '[Memes]';

export const getMemes = createAction(`${source} Get Memes`);

export const getMemesSuccess = createAction(
  `${source} Get Memes Success`,
  props<{ memes: IMeme[] }>()
);

export const getMemesError = createAction(
  `${source} Get Memes Error`,
  props<{ error: string }>()
);
