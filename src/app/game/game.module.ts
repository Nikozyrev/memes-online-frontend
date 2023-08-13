import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { CardComponent } from './components/card/card.component';
import { HandComponent } from './components/hand/hand.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { SituationComponent } from './components/situation/situation.component';
import { SelectedCardComponent } from './components/selected-card/selected-card.component';


@NgModule({
  declarations: [
    GameComponent,
    CardComponent,
    HandComponent,
    GameInfoComponent,
    SituationComponent,
    SelectedCardComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
