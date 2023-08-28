import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsSituationSelected } from '../../store/selectors/situations.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  isSituationSelected = this.store.select(selectIsSituationSelected);

  constructor(private store: Store) {}
}
