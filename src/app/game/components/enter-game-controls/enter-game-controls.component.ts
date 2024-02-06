import { Component, computed, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { socketActions } from '../../store/actions/socket.actions';

@Component({
  selector: 'app-enter-game-controls',
  templateUrl: './enter-game-controls.component.html',
  styleUrls: ['./enter-game-controls.component.scss'],
})
export class EnterGameControlsComponent {
  private store = inject(Store);

  public isSessionJoined = input.required<boolean>();
  public isUser = input.required<boolean>();
  public username = input.required<string>();
  public sessionId = input.required<number>();

  public canCreateSession = computed(() => this.isUser() && !this.isSessionJoined());

  public attachUser() {
    this.store.dispatch(socketActions.attachUser({ login: this.username() }));
  }

  public createSession() {
    this.store.dispatch(socketActions.createSession());
  }

  public unpauseSession() {
    this.store.dispatch(socketActions.unpauseSession());
  }

  public joinSession() {
    this.store.dispatch(
      socketActions.joinSession({ sessionId: this.sessionId() })
    );
  }
}
