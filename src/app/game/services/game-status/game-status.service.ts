import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { filter, map, take } from 'rxjs';
import {
  ActionTypes,
  IAttachUserBody,
  ICreateSessionBody,
  IJoinSessionBody,
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

  joinSession(sessionId: number) {
    const joinSessionMsgObj = { action: 'join_session', value: sessionId };
    this.socketService.sendMessage(joinSessionMsgObj);
    return this.getJoinSessionStatus();
  }

  unpauseSession(sessionId: number) {
    const unpauseMsgObj = {
      action: 'game_action',
      gameAction: {
        sessionId,
        action: 'unpause_session',
      },
    };
    this.socketService.sendMessage(unpauseMsgObj);
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

  private getJoinSessionStatus() {
    return this.socketService.getMessageBody().pipe(
      filter(
        (body): body is IJoinSessionBody =>
          body.action === ActionTypes.joinSession
      ),
      map(({ success, error, session }) => ({ success, error, session })),
      take(1)
    );
  }
}
