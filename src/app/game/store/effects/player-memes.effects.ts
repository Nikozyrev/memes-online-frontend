import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { playerMemesActions } from '../actions/player-memes.actions';
import { PlayerMemesService } from '../../services/player-memes/player-memes.service';
import { socketActions } from '../actions/socket.actions';
import { selectStage } from '../selectors/game-info.selectors';
import { selectSessionId } from '../selectors/game-status.selectors';

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

  getSelectedMeme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.playerMemesService.getSelectedMeme().pipe(
          map((meme) =>
            playerMemesActions.getSelectedMemeSuccess({
              meme,
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
        concatLatestFrom(() =>
          combineLatest({
            stage: this.store.select(selectStage),
            sessionId: this.store.select(selectSessionId),
          })
        ),
        tap(([{ meme }, { stage, sessionId }]) => {
          if (!stage || !sessionId) return;
          console.log('Select Meme', meme);

          this.playerMemesService.selectMeme(meme.id, stage, sessionId);
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
