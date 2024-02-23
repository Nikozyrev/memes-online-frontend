import { Component, computed, input } from '@angular/core';
import { IMeme } from '../../models/meme.model';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss'],
})
export class MemeComponent {
  public meme = input.required<IMeme>();

  public url = computed(() => this.meme().url);
}
