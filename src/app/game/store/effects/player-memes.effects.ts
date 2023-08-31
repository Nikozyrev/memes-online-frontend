import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap, tap } from 'rxjs';
import { playerMemesActions } from '../actions/player-memes.actions';
import { PlayerMemesService } from '../../services/player-memes/player-memes.service';
import { socketActions } from '../actions/socket.actions';
import { selectGameInfo } from '../selectors/game-info.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class PlayerMemesEffects {
  // Пока работает через gameInfo state

  // getMemes$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(socketActions.connected),
  //     switchMap(() => {
  //       return this.playerMemesService.getMemes().pipe(
  //         map((memes) =>
  //           playerMemesActions.getMemesSuccess({
  //             memes,
  //           })
  //         )
  //       );
  //     })
  //   );
  // });

  selectMeme$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(playerMemesActions.selectMeme),
        concatLatestFrom(() => this.store.select(selectGameInfo)),
        tap(([{ meme }, gameInfo]) => {
          if (!gameInfo) return;
          console.log('Select Meme', meme);

          this.playerMemesService.selectMeme(meme.id, gameInfo);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private playerMemesService: PlayerMemesService
  ) {}
}
