import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { SocketService } from '../socket/socket.service';
import { Stage } from '../../models/game-info.model';

@Injectable({
  providedIn: 'root',
})
export class SituationsService {
  constructor(private socketService: SocketService) {}

  getSituations() {
    return this.socketService.getGameState().pipe(
      map(({ situations }) => situations ?? []),
      distinctUntilChanged((prev, current) => {
        if (current.length !== prev.length) return false;
        return current.every(({ id }, i) => id === prev[i]?.id);
      })
    );
  }

  getSelectedSituation() {
    return this.socketService.getGameState().pipe(
      map(({ selectedSituation }) => selectedSituation),
      distinctUntilChanged((prev, current) => current?.id === prev?.id)
    );
  }

  selectSituation(id: number, stage: Stage, sessionId: number) {
    if (stage !== Stage.one) {
      return;
    }
    const selectSituationObj = {
      action: 'game_action',
      gameAction: {
        sessionId,
        action: 'select_situation',
        id,
      },
    };
    this.socketService.sendMessage(selectSituationObj);
  }
}
