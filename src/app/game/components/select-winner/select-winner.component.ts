import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import { selectMemesHand } from '../../store/selectors/player-memes.selectors';

@Component({
  selector: 'app-select-winner',
  templateUrl: './select-winner.component.html',
  styleUrls: ['./select-winner.component.scss'],
})
export class SelectWinnerComponent {
  memes: Observable<IMeme[]> = this.store.select(selectMemesHand);

  constructor(private store: Store) {}

  selectWinner(meme: IMeme) {
    // this.store.dispatch(memesActions.selectMeme({ meme }));
  }
}
