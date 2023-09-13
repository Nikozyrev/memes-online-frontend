import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { SocketService } from '../socket/socket.service';
import { IGameInfo } from '../../models/game-info.model';

@Injectable({
  providedIn: 'root',
})
export class GameInfoService {
  constructor(private socketService: SocketService) {}

  getGameInfo() {
    return this.socketService.getGameState().pipe(
      map(
        ({
          round,
          second,
          stage,
          activeUser,
          stageInfo,
          description,
        }): IGameInfo => ({
          stage,
          round,
          second,
          activeUser,
          stageInfo,
          description,
        })
      ),
      distinctUntilChanged(
        (prev, current) => current.second === prev.second
        // (Object.keys(current) as (keyof IGameInfo)[]).every(
        //   (key) => current[key] === prev[key]
        // )
      )
    );
  }
}
