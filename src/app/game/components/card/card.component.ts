import { Component, Input } from '@angular/core';
import { IMeme } from '../../models/meme.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() meme?: IMeme;
}
