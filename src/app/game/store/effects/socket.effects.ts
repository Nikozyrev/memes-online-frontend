import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, of, switchMap, tap } from 'rxjs';
import { socketActions } from '../actions/socket.actions';
import { SocketService } from '../../services/socket/socket.service';
import { Store } from '@ngrx/store';
import { selectSessionId } from '../selectors/game-info.selectors';

@Injectable()
export class SocketEffects {
  connectSocket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.connect),
      switchMap(() => {
        return this.socketService.connectSocket().pipe(
          map((status) => {
            if (status === 1) {
              return socketActions.connected();
            }
            return socketActions.disconnected();
          })
        );
      })
    );
  });

  extractSimpSessionId$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(socketActions.connected),
        tap(() => {
          this.socketService.extractSimpSessionId();
        })
      );
    },
    { dispatch: false }
  );

  attachUser$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(socketActions.attachUser),
        tap(({ login }) => {
          this.socketService.attachUser(login);
        })
      );
    },
    { dispatch: false }
  );

  createSession$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(socketActions.createSession),
        tap(() => {
          this.socketService.createSession();
        })
      );
    },
    { dispatch: false }
  );

  joinSession$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(socketActions.joinSession),
        tap(({ sessionId }) => {
          this.socketService.joinSession(sessionId);
        })
      );
    },
    { dispatch: false }
  );

  unpauseSession$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(socketActions.unpauseSession),
        concatLatestFrom(() => this.store.select(selectSessionId)),
        tap(([, sessionId]) => {
          if (!sessionId) {
            console.error(
              'Could not unpause session. Not connected to any session. '
            );
            return;
          }
          this.socketService.unpauseSession(sessionId);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private socketService: SocketService
  ) {}
}
