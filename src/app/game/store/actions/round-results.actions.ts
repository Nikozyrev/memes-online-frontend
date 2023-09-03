import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IMeme, ISelectedMeme } from '../../models/meme.model';

export const roundResultsActions = createActionGroup({
  source: 'Round Results',
  events: {
    'Get Memes': emptyProps(),
    'Get Memes Success': props<{ memes: ISelectedMeme[] }>(),
    'Get Memes Error': props<{ error: string }>(),
    'Get Round Winner': emptyProps(),
    'Get Round Winner Success': props<{ roundWinner: ISelectedMeme | null }>(),
    'Get Round Winner Error': props<{ error: string }>(),
    'Select Winner': props<{ meme: IMeme }>(),
  },
});
