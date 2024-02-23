import { Component, Signal, inject, input } from '@angular/core';
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
  private store = inject(Store);

  public isActive = input.required<boolean>();

  public memes: Signal<IMeme[]> = this.store.selectSignal(selectHand);
  public selectedMemeId: Signal<number | null> = this.store.selectSignal(selectSelectedMemeId);

  public selectMeme(meme: IMeme) {
    if (!this.isActive()) {
      console.log(`Нельзя выбрать мем.`);
      return;
    }
    this.store.dispatch(playerMemesActions.selectMeme({ meme }));
  }
}
