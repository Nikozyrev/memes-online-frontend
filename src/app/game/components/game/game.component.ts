import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsSituationSelected } from '../../store/selectors/situations.selectors';
import { SocketService } from '../../services/socket/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  isSituationSelected = this.store.select(selectIsSituationSelected);

  constructor(private store: Store, private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.connectSocket();
  }
}
