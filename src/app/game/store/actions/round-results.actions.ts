import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';

export const roundResultsActions = createActionGroup({
  source: 'Round Results',
  events: {
    'Get Memes': emptyProps(),
    'Get Memes Success': props<{ memes: IMeme[] }>(),
    'Get Memes Error': props<{ error: string }>(),
    'Select Winner': props<{ meme: IMeme }>(),
  },
});
