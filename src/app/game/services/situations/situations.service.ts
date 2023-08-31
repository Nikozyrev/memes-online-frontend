import { Injectable } from '@angular/core';
import { ISituation } from '../../models/situation.model';
import { SocketService } from '../socket/socket.service';
import { IGameInfo } from '../../models/socket.model';

@Injectable({
  providedIn: 'root',
})
export class SituationsService {
  mockedSituations: ISituation[] = [];

  constructor(private socketService: SocketService) {}

  getSituations() {
    return this.mockedSituations;
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
