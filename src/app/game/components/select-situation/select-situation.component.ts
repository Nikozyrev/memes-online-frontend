import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ISituation } from '../../models/situation.model';

@Component({
  selector: 'app-select-situation',
  templateUrl: './select-situation.component.html',
  styleUrls: ['./select-situation.component.scss'],
})
export class SelectSituationComponent {
  situations!: Observable<ISituation[]>;
}
