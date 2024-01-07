import { Component, Input, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import { playerMemesActions } from '../../store/actions/player-memes.actions';
import {
  selectHand,
  selectSelectedMemeId,
} from '../../store/selectors/player-memes.selectors';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent {
  @Input({ required: true })
  public isActive!: boolean;

  public memes: Signal<IMeme[]>;
  public selectedMemeId: Signal<number | null>;

  constructor(private store: Store) {
    this.memes = this.store.selectSignal(selectHand);
    this.selectedMemeId = this.store.selectSignal(selectSelectedMemeId);
  }

  public selectMeme(meme: IMeme) {
    if (!this.isActive) {
      console.log(`Нельзя выбрать мем.`);
      return;
    }
    this.store.dispatch(playerMemesActions.selectMeme({ meme }));
  }
}
