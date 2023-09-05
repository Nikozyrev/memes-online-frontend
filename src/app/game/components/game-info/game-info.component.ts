import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  selectActiveUser,
  selectStage,
  selectTimer,
} from '../../store/selectors/game-info.selectors';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent {
  gameInfo = combineLatest({
    stage: this.store.select(selectStage),
    timer: this.store.select(selectTimer),
    activeUser: this.store.select(selectActiveUser),
  });

  constructor(private store: Store) {}
}
