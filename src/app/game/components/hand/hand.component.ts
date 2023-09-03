import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import { playerMemesActions } from '../../store/actions/player-memes.actions';
import { selectHand } from '../../store/selectors/game-info.selectors';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent {
  @Input({ required: true })
  isActive!: boolean;

  memes: Observable<IMeme[]> = this.store.select(selectHand);

  constructor(private store: Store) {}

  selectMeme(meme: IMeme) {
    if (!this.isActive) {
      console.log(`Can't select meme. Stage is not 2.`);
      return;
    }
    this.store.dispatch(playerMemesActions.selectMeme({ meme }));
  }
}
