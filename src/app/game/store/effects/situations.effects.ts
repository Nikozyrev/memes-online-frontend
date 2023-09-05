import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { situationsActions } from '../actions/situations.actions';
import { SituationsService } from '../../services/situations/situations.service';
import { selectStage } from '../selectors/game-info.selectors';
import { socketActions } from '../actions/socket.actions';
import { selectSessionId } from '../selectors/game-status.selectors';

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
        concatLatestFrom(() =>
          combineLatest({
            stage: this.store.select(selectStage),
            sessionId: this.store.select(selectSessionId),
          })
        ),
        tap(([{ situation }, { stage, sessionId }]) => {
          if (!stage || !sessionId) return;
          console.log('Select Situation', situation);

          this.situationsService.selectSituation(
            situation.id,
            stage,
            sessionId
          );
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
