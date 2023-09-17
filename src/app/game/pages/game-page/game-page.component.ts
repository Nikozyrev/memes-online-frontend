import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsInGame } from '../../store/selectors/game-status.selectors';
import { socketActions } from '../../store/actions/socket.actions';

@Component({
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  isInGame = this.store.select(selectIsInGame);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(socketActions.connect());
  }
}
