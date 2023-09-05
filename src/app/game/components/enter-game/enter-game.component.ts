import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { socketActions } from '../../store/actions/socket.actions';
import { Observable } from 'rxjs';
import {
  selectIsConnected,
  selectIsUser,
} from '../../store/selectors/game-status.selectors';
import { selectSessionId } from '../../store/selectors/game-status.selectors';

@Component({
  selector: 'app-enter-game',
  templateUrl: './enter-game.component.html',
  styleUrls: ['./enter-game.component.scss'],
})
export class EnterGameComponent {
  login = '';

  sessionId = 0;

  isConnected: Observable<boolean> = this.store.select(selectIsConnected);
  isUser: Observable<boolean> = this.store.select(selectIsUser);
  sessionIdJoined: Observable<number | null | undefined> =
    this.store.select(selectSessionId);

  constructor(private store: Store) {}

  attachUser(login: string) {
    this.store.dispatch(socketActions.attachUser({ login }));
  }

  createSession() {
    this.store.dispatch(socketActions.createSession());
  }

  unpauseSession() {
    this.store.dispatch(socketActions.unpauseSession());
  }

  joinSession(sessionId: number) {
    this.store.dispatch(socketActions.joinSession({ sessionId }));
  }

  setSessionId(value: string) {
    this.sessionId = Number(value);
  }
}
