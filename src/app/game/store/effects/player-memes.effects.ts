import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { playerMemesActions } from '../actions/player-memes.actions';
import { PlayerMemesService } from '../../services/player-memes/player-memes.service';

@Injectable()
export class MemesEffects {
  getMemes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(playerMemesActions.getMemes),
      mergeMap(() =>
        of(
          playerMemesActions.getMemesSuccess({
            memes: this.playerMemesService.getMemes(),
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private playerMemesService: PlayerMemesService
  ) {}
}
