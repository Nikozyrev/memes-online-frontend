import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game/game.component';
import { MemeComponent } from './components/meme/meme.component';
import { HandComponent } from './components/hand/hand.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { SituationComponent } from './components/situation/situation.component';
import {
  playerMemesFeatureKey,
  playerMemesReducer,
} from './store/reducers/player-memes.reducers';
import { MemesEffects } from './store/effects/player-memes.effects';
import { SelectSituationComponent } from './components/select-situation/select-situation.component';
import {
  situationsFeatureKey,
  situationsReducer,
} from './store/reducers/situations.reducers';
import { SituationsEffects } from './store/effects/situations.effects';
import { SelectedSituationComponent } from './components/selected-situation/selected-situation.component';
import { SelectedMemeComponent } from './components/selected-meme/selected-meme.component';
import { SelectWinnerComponent } from './components/select-winner/select-winner.component';

@NgModule({
  declarations: [
    GameComponent,
    HandComponent,
    GameInfoComponent,
    SituationComponent,
    SelectSituationComponent,
    SelectedSituationComponent,
    MemeComponent,
    SelectedMemeComponent,
    SelectWinnerComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature(playerMemesFeatureKey, playerMemesReducer),
    StoreModule.forFeature(situationsFeatureKey, situationsReducer),
    EffectsModule.forFeature([MemesEffects, SituationsEffects]),
  ],
})
export class GameModule {}
