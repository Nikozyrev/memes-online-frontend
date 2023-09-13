import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectGameInfoState,
  selectIsUserActive,
} from '../../store/selectors/game-info.selectors';
import { selectError } from '../../store/selectors/game-status.selectors';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent {
  gameInfo = this.store.select(selectGameInfoState);
  error = this.store.select(selectError);
  isUserActive = this.store.select(selectIsUserActive);

  constructor(private store: Store) {}
}
