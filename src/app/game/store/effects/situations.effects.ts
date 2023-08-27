import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { situationsActions } from '../actions/situations.actions';
import { SituationsService } from '../../services/situations/situations.service';

@Injectable()
export class SituationsEffects {
  getSituationsToSelect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(situationsActions.getSituationsToSelect),
      mergeMap(() =>
        of(
          situationsActions.getSituationsToSelectSuccess({
            situationsToSelect: this.situationsService.getSituations(),
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private situationsService: SituationsService
  ) {}
}
