import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, combineLatest, filter, map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectIsUserActive,
  selectStage,
} from '../selectors/game-info.selectors';
import { RoundResultsService } from '../../services/round-results/round-results.service';
import { roundResultsActions } from '../actions/round-results.actions';
import { socketActions } from '../actions/socket.actions';
import { selectSessionId } from '../selectors/game-status.selectors';

@Injectable()
export class RoundResultsEffects {
  getRoundMemes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.roundResultsService.getRoundMemes().pipe(
          map((memes) =>
            roundResultsActions.getMemesSuccess({
              memes,
            })
          )
        );
      })
    );
  });

  getRoundWinner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.roundResultsService.getRoundWinner().pipe(
          map((roundWinner) =>
            roundResultsActions.getRoundWinnerSuccess({
              roundWinner,
            })
          )
        );
      })
    );
  });

  getRoundPreWinner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.roundResultsService.getRoundPreWinner().pipe(
          concatLatestFrom(() => this.store.select(selectIsUserActive)),
          filter(([, isUserActive]) => isUserActive),
          map(([roundPreWinner]) =>
            roundResultsActions.getRoundPreWinnerSuccess({
              roundPreWinner,
            })
          )
        );
      })
    );
  });

  selectWinner$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(roundResultsActions.selectWinner),
        concatLatestFrom(() =>
          combineLatest({
            stage: this.store.select(selectStage),
            sessionId: this.store.select(selectSessionId),
          })
        ),
        tap(([{ meme }, { stage, sessionId }]) => {
          if (!stage || !sessionId) return;
          console.log('Select Winner', meme);

          this.roundResultsService.selectWinMeme(meme.id, stage, sessionId);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private roundResultsService: RoundResultsService
  ) {}
}
