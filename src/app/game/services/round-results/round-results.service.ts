import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { SocketService } from '../socket/socket.service';
import { IGameInfo } from '../../models/socket.model';

@Injectable({
  providedIn: 'root',
})
export class RoundResultsService {
  constructor(private socketService: SocketService) {}

  getRoundMemes() {
    return this.socketService.getGameState().pipe(
      map(({ selectedMemes }) => selectedMemes ?? []),
      distinctUntilChanged((prev, current) =>
        current.every(({ meme: { id } }, i) => id === prev[i]?.meme.id)
      )
    );
  }

  getRoundWinner() {
    return this.socketService.getGameState().pipe(
      map(({ currentRoundWinner }) => currentRoundWinner),
      distinctUntilChanged(
        (prev, current) => current?.meme.id === prev?.meme.id
      )
    );
  }

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
