import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ISituation } from '../../models/situation.model';

export const situationsActions = createActionGroup({
  source: 'Situations',
  events: {
    'Get Situations To Select': emptyProps(),
    'Get Situations To Select Success': props<{
      situationsToSelect: ISituation[];
    }>(),
    'Get Situations To Select Error': props<{ error: string }>(),
    'Select Situation': props<{ situation: ISituation }>(),
  },
});
