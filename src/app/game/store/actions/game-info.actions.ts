import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IGameInfo } from '../../models/socket.model';

export const gameInfoActions = createActionGroup({
  source: 'Game Info',
  events: {
    'Get Info': emptyProps(),
    'Get Info Success': props<{ gameInfo: IGameInfo }>(),
    'Get Info Error': props<{ error: string }>(),
  },
});
