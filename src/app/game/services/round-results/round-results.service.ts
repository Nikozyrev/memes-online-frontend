import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { SocketService } from '../socket/socket.service';
import { Stage } from '../../models/game-info.model';

@Injectable({
  providedIn: 'root',
})
export class RoundResultsService {
  constructor(private socketService: SocketService) {}

  getRoundMemes() {
    return this.socketService.getGameState().pipe(
      map(({ selectedMemes }) => selectedMemes ?? []),
      distinctUntilChanged((prev, current) => {
        if (current.length !== prev.length) return false;
        return current.every(({ meme: { id } }, i) => id === prev[i]?.meme.id);
      })
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

  selectWinMeme(memeId: number, stage: Stage, sessionId: number) {
    if (stage !== Stage.three) {
      return;
    }
    const selectWinnerMemeObj = {
      action: 'game_action',
      gameAction: {
        sessionId,
        action: 'select_winner_meme',
        id: memeId,
      },
    };
    this.socketService.sendMessage(selectWinnerMemeObj);
  }
}
