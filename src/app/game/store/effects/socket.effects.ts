import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap, tap } from 'rxjs';
import { socketActions } from '../actions/socket.actions';
import { SocketService } from '../../services/socket/socket.service';

@Injectable()
export class SocketEffects {
  connectSocket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connect),
      switchMap(() => {
        return this.socketService
          .connectSocket()
          .pipe(map(() => socketActions.connected()));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private socketService: SocketService
  ) {}
}
