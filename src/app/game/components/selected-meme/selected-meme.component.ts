import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import { selectSelectedMeme } from '../../store/selectors/player-memes.selectors';

@Component({
  selector: 'app-selected-meme',
  templateUrl: './selected-meme.component.html',
  styleUrls: ['./selected-meme.component.scss'],
})
export class SelectedMemeComponent {
  public selectedMeme: Signal<IMeme | null>;

  constructor(private store: Store) {
    this.selectedMeme = this.store.selectSignal(selectSelectedMeme);
  }
}
