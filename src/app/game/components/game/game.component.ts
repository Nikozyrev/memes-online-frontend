import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  selectIsUserActive,
  selectStage,
} from '../../store/selectors/game-info.selectors';
import { selectIsSituationSelected } from '../../store/selectors/situations.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  state = combineLatest({
    currentStage: this.store.select(selectStage),
    isSituationSelected: this.store.select(selectIsSituationSelected),
    isUserActive: this.store.select(selectIsUserActive),
  });

  constructor(private store: Store) {}
}
