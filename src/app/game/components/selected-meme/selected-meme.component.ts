import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeme } from '../../models/meme.model';
import { Store } from '@ngrx/store';
import { selectSelectedMeme } from '../../store/selectors/player-memes.selectors';

@Component({
  selector: 'app-selected-meme',
  templateUrl: './selected-meme.component.html',
  styleUrls: ['./selected-meme.component.scss'],
})
export class SelectedMemeComponent {
  selectedMeme: Observable<IMeme | null> =
    this.store.select(selectSelectedMeme);

  constructor(private store: Store) {}
}
