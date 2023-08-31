import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap, tap } from 'rxjs';
import { situationsActions } from '../actions/situations.actions';
import { SituationsService } from '../../services/situations/situations.service';
import { selectGameInfo } from '../selectors/game-info.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class SituationsEffects {
  // getSituationsToSelect$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(situationsActions.getSituationsToSelect),
  //     switchMap(() =>
  //       of(
  //         situationsActions.getSituationsToSelectSuccess({
  //           situationsToSelect: this.situationsService.getSituations(),
  //         })
  //       )
  //     )
  //   );
  // });

  selectSituation$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(situationsActions.selectSituation),
        concatLatestFrom(() => this.store.select(selectGameInfo)),
        tap(([{ situation }, gameInfo]) => {
          if (!gameInfo) return;
          console.log('Select Situation', situation);

          this.situationsService.selectSituation(situation.id, gameInfo);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private situationsService: SituationsService
  ) {}
}
