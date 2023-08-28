import { Component, Input } from '@angular/core';
import { IMeme } from '../../models/meme.model';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss'],
})
export class MemeComponent {
  @Input() meme?: IMeme;
}
