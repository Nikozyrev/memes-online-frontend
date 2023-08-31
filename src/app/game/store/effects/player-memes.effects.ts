import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap, tap } from 'rxjs';
import { playerMemesActions } from '../actions/player-memes.actions';
import { PlayerMemesService } from '../../services/player-memes/player-memes.service';
import { socketActions } from '../actions/socket.actions';

@Injectable()
export class PlayerMemesEffects {
  getMemes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.playerMemesService.getMemes().pipe(
          map((memes) =>
            playerMemesActions.getMemesSuccess({
              memes,
            })
          )
        );
      })
    );
  });

  selectMeme$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(playerMemesActions.selectMeme),
        tap(({ meme }) => {
          // this.playerMemesService.selectMeme(meme.id);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private playerMemesService: PlayerMemesService
  ) {}
}
