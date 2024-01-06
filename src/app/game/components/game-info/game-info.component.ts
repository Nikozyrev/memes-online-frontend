import { Component, Signal, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectGameInfoState,
  selectIsUserActive,
} from '../../store/selectors/game-info.selectors';
import { selectError } from '../../store/selectors/game-status.selectors';
import { IGameInfoState } from '../../store/models/game-info.model';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent {
  public gameInfo: Signal<IGameInfoState>;
  public error: Signal<string | null>;
  public isUserActive: Signal<boolean>;

  public activeUser: Signal<string> = computed(() =>
    this.isUserActive() ? 'You' : this.gameInfo().activeUser?.name || 'Unknown'
  );

  constructor(private store: Store) {
    this.gameInfo = this.store.selectSignal(selectGameInfoState);
    this.error = this.store.selectSignal(selectError);
    this.isUserActive = this.store.selectSignal(selectIsUserActive);
  }
}
