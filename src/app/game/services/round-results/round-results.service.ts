import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { IGameInfo } from '../../models/socket.model';

@Injectable({
  providedIn: 'root',
})
export class RoundResultsService {
  constructor(private socketService: SocketService) {}

  selectWinMeme(memeId: number, gameInfo: IGameInfo) {
    if (gameInfo.stage !== '3') {
      return;
    }
    const selectWinnerMemeObj = {
      action: 'game_action',
      gameAction: {
        sessionId: gameInfo.sessionId,
        action: 'select_winner_meme',
        id: memeId,
      },
    };
    this.socketService.sendMessage(selectWinnerMemeObj);
  }
}
