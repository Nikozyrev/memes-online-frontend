import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { socketActions } from '../../store/actions/socket.actions';

@Component({
  selector: 'app-enter-game-controls',
  templateUrl: './enter-game-controls.component.html',
  styleUrls: ['./enter-game-controls.component.scss'],
})
export class EnterGameControlsComponent {
  @Input({ required: true })
  public isSessionJoined = false;

  @Input({ required: true })
  public isUser = false;

  @Input({ required: true })
  public username = '';

  @Input({ required: true })
  public sessionId!: number;

  public get canCreateSession() {
    return this.isUser && !this.isSessionJoined;
  }

  constructor(private store: Store) {}

  public attachUser() {
    this.store.dispatch(socketActions.attachUser({ login: this.username }));
  }

  public createSession() {
    this.store.dispatch(socketActions.createSession());
  }

  public unpauseSession() {
    this.store.dispatch(socketActions.unpauseSession());
  }

  public joinSession() {
    this.store.dispatch(
      socketActions.joinSession({ sessionId: this.sessionId })
    );
  }
}
