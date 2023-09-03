import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectGameInfoState } from '../selectors/game-info.selectors';
import { RoundResultsService } from '../../services/round-results/round-results.service';
import { roundResultsActions } from '../actions/round-results.actions';
import { socketActions } from '../actions/socket.actions';

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

  selectWinner$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(roundResultsActions.selectWinner),
        concatLatestFrom(() => this.store.select(selectGameInfoState)),
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
