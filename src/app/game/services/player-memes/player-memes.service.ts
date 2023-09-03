import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { SocketService } from '../socket/socket.service';
import { IGameInfo } from '../../models/socket.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerMemesService {
  constructor(private socketService: SocketService) {}

  getMemes() {
    return this.socketService.getGameState().pipe(
      map(({ hand }) => hand ?? []),
      distinctUntilChanged((prev, current) =>
        current.every(({ id }, i) => id === prev[i]?.id)
      )
    );
  }

  getSelectedMeme() {
    return this.socketService.getGameState().pipe(
      map(({ selectedMeme }) => selectedMeme),
      distinctUntilChanged((prev, current) => current?.id === prev?.id)
    );
  }

  selectMeme(id: number, gameInfo: IGameInfo) {
    if (gameInfo.stage !== '2') {
      return;
    }
    const selectMemeObj: any = {
      action: 'game_action',
      gameAction: {
        sessionId: gameInfo.sessionId,
        action: 'select_meme',
        id: id,
      },
    };
    this.socketService.sendMessage(selectMemeObj);
  }
}
