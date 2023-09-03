import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';

export const playerMemesActions = createActionGroup({
  source: 'Player Memes',
  events: {
    'Get Memes': emptyProps(),
    'Get Memes Success': props<{ memes: IMeme[] }>(),
    'Get Memes Error': props<{ error: string }>(),
    'Get Selected Meme': emptyProps(),
    'Get Selected Meme Success': props<{ meme: IMeme | null }>(),
    'Get Selected Meme Error': props<{ error: string }>(),
    'Select Meme': props<{ meme: IMeme }>(),
  },
});
