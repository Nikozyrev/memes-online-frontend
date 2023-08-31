import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsSituationSelected } from '../../store/selectors/game-info.selectors';
import { socketActions } from '../../store/actions/socket.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  isSituationSelected = this.store.select(selectIsSituationSelected);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(socketActions.connect());
  }
}
