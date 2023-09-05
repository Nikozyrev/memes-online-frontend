import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { filter, map, take } from 'rxjs';
import {
  ActionTypes,
  IAttachUserBody,
  ICreateSessionBody,
} from '../../models/socket.model';

@Injectable({
  providedIn: 'root',
})
export class GameStatusService {
  constructor(private socketService: SocketService) {}

  attachUser(login: string) {
    this.socketService.sendMessage({ action: 'attach_user', value: login });
    return this.getAttachUserStatus();
  }

  private getAttachUserStatus() {
    return this.socketService.getMessageBody().pipe(
      filter(
        (body): body is IAttachUserBody =>
          body.action === ActionTypes.attachUser
      ),
      map(({ success, error, user }) => ({ success, error, user })),
      take(1)
    );
  }

  createSession() {
    this.socketService.sendMessage({
      action: 'create_session',
      sessionSettings: {
        active: true,
        paused: true,
        finished: false,

        autoStep: false,

        maxPlayers: 100,

        situationDeckSize: 8,
        situationsToChooseCount: 2,
        memeDeckSize: 12,
        memesPerHand: 4,
        sendMessageTime: 250,

        stageOneTime: 15,
        stageTwoTime: 15,
        stageThreeTime: 15,
        stageFourTime: 15,
      },
    });
    return this.getCreateSessionStatus();
  }

  private getCreateSessionStatus() {
    return this.socketService.getMessageBody().pipe(
      filter(
        (body): body is ICreateSessionBody =>
          body.action === ActionTypes.createSession
      ),
      map(({ success, error, session }) => ({ success, error, session })),
      take(1)
    );
  }
}
