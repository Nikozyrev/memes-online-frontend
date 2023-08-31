import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { socketActions } from '../actions/socket.actions';
import { SocketService } from '../../services/socket/socket.service';
import { gameInfoActions } from '../actions/game-info.actions';

@Injectable()
export class GameInfoEffects {
  getGameInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connected),
      switchMap(() => {
        return this.socketService.getGameState().pipe(
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
    private socketService: SocketService
  ) {}
}
