import { Component, Signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMeme } from '../../models/meme.model';
import { selectSelectedMeme } from '../../store/selectors/player-memes.selectors';

@Component({
  selector: 'app-selected-meme',
  templateUrl: './selected-meme.component.html',
  styleUrls: ['./selected-meme.component.scss'],
})
export class SelectedMemeComponent {
  private store = inject(Store);

  public selectedMeme: Signal<IMeme | null> = this.store.selectSignal(selectSelectedMeme);
}
