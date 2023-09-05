import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';
import { ISession } from '../../models/socket.model';

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
    'Create Session Success': props<{ session: ISession }>(),
    'Create Session Error': props<{ error: string }>(),
    'Join Session': props<{ sessionId: number }>(),
    'Unpause Session': emptyProps(),
  },
});
