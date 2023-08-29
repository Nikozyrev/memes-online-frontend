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
import { SelectSituationComponent } from './components/select-situation/select-situation.component';
import { SelectedSituationComponent } from './components/selected-situation/selected-situation.component';
import { SelectedMemeComponent } from './components/selected-meme/selected-meme.component';
import { SelectWinnerComponent } from './components/select-winner/select-winner.component';
import { gameFeatureKey } from './store/selectors/game.selectors';
import { gameReducer } from './store/reducers/game.reducers';
import { PlayerMemesEffects } from './store/effects/player-memes.effects';
import { SituationsEffects } from './store/effects/situations.effects';

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
    StoreModule.forFeature(gameFeatureKey, gameReducer),
    EffectsModule.forFeature([PlayerMemesEffects, SituationsEffects]),
  ],
})
export class GameModule {}
