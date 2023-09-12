import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  selectIsUserActive,
  selectStage,
} from '../../store/selectors/game-info.selectors';
import { socketActions } from '../../store/actions/socket.actions';
import { selectIsSituationSelected } from '../../store/selectors/situations.selectors';
import { selectIsInGame } from '../../store/selectors/game-status.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  state = combineLatest({
    isInGame: this.store.select(selectIsInGame),
    currentStage: this.store.select(selectStage),
    isSituationSelected: this.store.select(selectIsSituationSelected),
    isUserActive: this.store.select(selectIsUserActive),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(socketActions.connect());
  }
}
