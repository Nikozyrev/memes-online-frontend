import { Component, computed, inject } from '@angular/core';
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
  private store = inject(Store);

  public currentStage = this.store.selectSignal(selectStage);
  public isSituationSelected = this.store.selectSignal(selectIsSituationSelected);
  public isUserActive = this.store.selectSignal(selectIsUserActive);

  public canSelectSituation = computed(
    () =>
      this.currentStage() === Stage.one &&
      this.isUserActive() &&
      !this.isSituationSelected()
  );

  public canShowWinner = computed(
    () => this.currentStage() === Stage.three || this.currentStage() === Stage.four
  );

  public canSelectMeme = computed(
    () => this.currentStage() === Stage.two && !this.isUserActive()
  );
}
