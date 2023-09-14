import { Component, Input } from '@angular/core';
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
  isActive!: boolean;

  memes = this.store.select(selectHand);
  selectedMemeId = this.store.select(selectSelectedMemeId);

  constructor(private store: Store) {}

  selectMeme(meme: IMeme) {
    if (!this.isActive) {
      console.log(`Нельзя выбрать мем.`);
      return;
    }
    this.store.dispatch(playerMemesActions.selectMeme({ meme }));
  }
}
