import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ISituation } from '../../models/situation.model';

export const situationsActions = createActionGroup({
  source: 'Situations',
  events: {
    'Get Situations': emptyProps(),
    'Get Situations Success': props<{
      situations: ISituation[];
    }>(),
    'Get Situations Error': props<{ error: string }>(),
    'Get Selected Situation': emptyProps(),
    'Get Selected Situation Success': props<{
      selectedSituation: ISituation | null;
    }>(),
    'Get Selected Situation Error': props<{ error: string }>(),
    'Select Situation': props<{ situation: ISituation }>(),
  },
});
