import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { situationsActions } from '../actions/situations.actions';
import { SituationsService } from '../../services/situations/situations.service';
import { selectGameInfo } from '../selectors/game-info.selectors';
import { socketActions } from '../actions/socket.actions';

@Injectable()
export class SituationsEffects {
  getSituations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.situationsService.getSituations().pipe(
          map((situations) =>
            situationsActions.getSituationsSuccess({
              situations,
            })
          )
        );
      })
    );
  });

  getSelectedSituation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.situationsService.getSelectedSituation().pipe(
          map((selectedSituation) =>
            situationsActions.getSelectedSituationSuccess({
              selectedSituation,
            })
          )
        );
      })
    );
  });

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
