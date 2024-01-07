import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  public login = '';
  public sessionId = 0;

  public isConnected = this.store.selectSignal(selectIsConnected);
  public isUser = this.store.selectSignal(selectIsUser);
  public sessionIdJoined = this.store.selectSignal(selectSessionId);

  constructor(private store: Store) {}

  public setSessionId(value: string) {
    this.sessionId = Number(value);
  }
}
