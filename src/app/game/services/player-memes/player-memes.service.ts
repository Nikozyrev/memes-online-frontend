import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { SocketService } from '../socket/socket.service';
import { Stage } from '../../models/game-info.model';

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

  selectMeme(id: number, stage: Stage, sessionId: number) {
    if (stage !== Stage.two) {
      return;
    }
    const selectMemeObj = {
      action: 'game_action',
      gameAction: {
        sessionId,
        action: 'select_meme',
        id,
      },
    };
    this.socketService.sendMessage(selectMemeObj);
  }
}
