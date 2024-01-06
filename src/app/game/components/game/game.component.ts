import { Component, Signal, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectIsUserActive,
  selectStage,
} from '../../store/selectors/game-info.selectors';
import { selectIsSituationSelected } from '../../store/selectors/situations.selectors';
import { Stage } from '../../models/game-info.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  public currentStage: Signal<Stage | null>;

  public isSituationSelected: Signal<boolean>;

  public isUserActive: Signal<boolean>;

  public canSelectSituation = computed(
    () =>
      this.currentStage() === '1' &&
      this.isUserActive() &&
      !this.isSituationSelected()
  );

  public canShowWinner = computed(
    () => this.currentStage() === '3' || this.currentStage() === '4'
  );

  public canSelectMeme = computed(
    () => this.currentStage() === '2' && !this.isUserActive()
  );

  constructor(private store: Store) {
    this.currentStage = this.store.selectSignal(selectStage);
    this.isSituationSelected = this.store.selectSignal(
      selectIsSituationSelected
    );
    this.isUserActive = this.store.selectSignal(selectIsUserActive);
  }
}
