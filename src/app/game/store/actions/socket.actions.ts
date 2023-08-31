import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const socketActions = createActionGroup({
  source: 'Socket',
  events: {
    Connect: emptyProps(),
    Connected: emptyProps(),
  },
});
