import { Component, Input } from '@angular/core';
import { ISituation } from '../../models/situation.model';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss'],
})
export class SituationComponent {
  @Input({ required: true })
  situation!: ISituation | null;
}
