import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { SocketService } from '../socket/socket.service';
import { IGameInfo } from '../../models/socket.model';

@Injectable({
  providedIn: 'root',
})
export class SituationsService {
  constructor(private socketService: SocketService) {}

  getSituations() {
    return this.socketService.getGameState().pipe(
      map(({ situations }) => situations ?? []),
      distinctUntilChanged((prev, current) =>
        current.every(({ id }, i) => id === prev[i]?.id)
      )
    );
  }

  getSelectedSituation() {
    return this.socketService.getGameState().pipe(
      map(({ selectedSituation }) => selectedSituation),
      distinctUntilChanged((prev, current) => current?.id === prev?.id)
    );
  }

  selectSituation(id: number, gameInfo: IGameInfo) {
    if (gameInfo.stage !== '1') {
      return;
    }
    const selectSituationObj = {
      action: 'game_action',
      gameAction: {
        sessionId: gameInfo.sessionId,
        action: 'select_situation',
        id: id,
      },
    };
    this.socketService.sendMessage(selectSituationObj);
  }
}
