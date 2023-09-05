import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export const socketActions = createActionGroup({
  source: 'Socket',
  events: {
    Connect: emptyProps(),
    Connected: emptyProps(),
    Disconnected: emptyProps(),
    'Attach User': props<{ login: string }>(),
    'Attach User Success': props<{ user: IUser }>(),
    'Attach User Error': props<{ error: string }>(),
    'Create Session': emptyProps(),
    'Join Session': props<{ sessionId: number }>(),
    'Unpause Session': emptyProps(),
  },
});
