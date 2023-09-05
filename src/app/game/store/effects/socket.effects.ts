import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { socketActions } from '../actions/socket.actions';
import { SocketService } from '../../services/socket/socket.service';
import { selectSessionId } from '../selectors/game-status.selectors';
import { GameStatusService } from '../../services/game-status/game-status.service';

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

  attachUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.attachUser),
      switchMap(({ login }) => {
        return this.gameStatusService
          .attachUser(login)
          .pipe(
            map(({ success, user, error }) =>
              success
                ? socketActions.attachUserSuccess({ user })
                : socketActions.attachUserError({ error: error! })
            )
          );
      })
    );
  });

  createSession$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.createSession),
      switchMap(() => {
        return this.gameStatusService
          .createSession()
          .pipe(
            map(({ success, error, session }) =>
              success
                ? socketActions.createSessionSuccess({ session })
                : socketActions.createSessionError({ error: error! })
            )
          );
      })
    );
  });

  joinSession$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(socketActions.joinSession),
      switchMap(({ sessionId }) => {
        return this.gameStatusService
          .joinSession(sessionId)
          .pipe(
            map(({ success, error, session }) =>
              success
                ? socketActions.joinSessionSuccess({ session })
                : socketActions.joinSessionError({ error: error! })
            )
          );
      })
    );
  });

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
          this.gameStatusService.unpauseSession(sessionId);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private socketService: SocketService,
    private gameStatusService: GameStatusService
  ) {}
}
