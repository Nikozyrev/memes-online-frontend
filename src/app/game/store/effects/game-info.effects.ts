import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { socketActions } from '../actions/socket.actions';
import { gameInfoActions } from '../actions/game-info.actions';
import { GameInfoService } from '../../services/game-info/game-info.service';

@Injectable()
export class GameInfoEffects {
  getGameInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.gameInfoService.getGameInfo().pipe(
          map((gameInfo) =>
            gameInfoActions.getInfoSuccess({
              gameInfo,
            })
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private gameInfoService: GameInfoService
  ) {}
}
