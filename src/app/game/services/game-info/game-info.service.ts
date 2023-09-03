import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { distinctUntilChanged, map } from 'rxjs';
import { IGameInfo } from '../../models/game-info.model';

@Injectable({
  providedIn: 'root',
})
export class GameInfoService {
  constructor(private socketService: SocketService) {}

  getGameInfo() {
    return this.socketService.getGameState().pipe(
      map(
        ({ round, second, error, sessionId, stage }): IGameInfo => ({
          sessionId,
          stage,
          round,
          second,
          error,
        })
      ),
      distinctUntilChanged((prev, current) =>
        (Object.keys(current) as (keyof IGameInfo)[]).every(
          (key) => current[key] === prev[key]
        )
      )
    );
  }
}
