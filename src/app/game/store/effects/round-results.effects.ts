import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectGameInfo } from '../selectors/game-info.selectors';
import { RoundResultsService } from '../../services/round-results/round-results.service';
import { roundResultsActions } from '../actions/round-results.actions';

@Injectable()
export class RoundResultsEffects {
  selectWinner$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(roundResultsActions.selectWinner),
        concatLatestFrom(() => this.store.select(selectGameInfo)),
        tap(([{ meme }, gameInfo]) => {
          if (!gameInfo) return;
          console.log('Select Winner', meme);

          this.roundResultsService.selectWinMeme(meme.id, gameInfo);
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
