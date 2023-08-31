import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const socketActions = createActionGroup({
  source: 'Socket',
  events: {
    Connect: emptyProps(),
    Connected: emptyProps(),
    Disconnected: emptyProps(),
    'Attach User': props<{ login: string }>(),
    'Create Session': emptyProps(),
    'Join Session': props<{ sessionId: number }>(),
  },
});
