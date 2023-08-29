import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import { playerMemesActions } from '../../store/actions/player-memes.actions';
import * as MemesSelectors from '../../store/selectors/player-memes.selectors';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent implements OnInit {
  memes: Observable<IMeme[]> = this.store.select(
    MemesSelectors.selectMemesHand
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(playerMemesActions.getMemes());
  }

  selectMeme(meme: IMeme) {
    this.store.dispatch(playerMemesActions.selectMeme({ meme }));
  }
}
