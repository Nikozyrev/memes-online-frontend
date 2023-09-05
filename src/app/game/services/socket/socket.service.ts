import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { RxStompConfig } from '@stomp/rx-stomp';
import { filter, map, tap } from 'rxjs';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import {
  ActionTypes,
  IAttachUserBody,
  IGameMessageBody,
  ISocketMessageBody,
} from '../../models/socket.model';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private rxStompConfig: RxStompConfig = {
    reconnectDelay: 200,
    webSocketFactory: () => this.socket,
  };
  private socket?: WebSocket;
  private stompClient: RxStomp;
  private simpSessionId?: string;

  constructor() {
    this.stompClient = new RxStomp();
  }

  connectSocket() {
    this.socket = new SockJS('http://localhost:8080/wsl');
    this.stompClient.configure(this.rxStompConfig);
    this.stompClient.activate();
    return this.stompClient.connected$;
  }

  getMessageBody() {
    return this.stompClient
      .watch({
        destination: `/user/${this.simpSessionId}/queue`,
      })
      .pipe(
        // tap((msg) => console.log(msg)),
        map(({ body }) => {
          const bodyParsed: ISocketMessageBody = JSON.parse(body);
          return bodyParsed;
        })
      );
  }

  getGameState() {
    return this.getMessageBody().pipe(
      filter(
        (body): body is IGameMessageBody =>
          body.action === ActionTypes.gameMessage
      ),
      map((body) => body.gameInfo)
      // tap((msg) => console.log(msg))
    );
  }

  getAttachUserStatus() {
    return this.getMessageBody().pipe(
      filter(
        (body): body is IAttachUserBody =>
          body.action === ActionTypes.attachUser
      ),
      map(({ success, error, user }) => ({ success, error, user }))
      // tap((msg) => console.log(msg))
    );
  }

  joinSession(sessionId: number) {
    const joinSessionMsgObj = { action: 'join_session', value: sessionId };
    this.sendMessage(joinSessionMsgObj);
  }

  attachUser(login: string) {
    this.sendMessage({ action: 'attach_user', value: login });
  }

  createSession() {
    this.sendMessage({
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
  }

  unpauseSession(sessionId: number) {
    const unpauseMsgObj = {
      action: 'game_action',
      gameAction: {
        sessionId,
        action: 'unpause_session',
      },
    };
    this.sendMessage(unpauseMsgObj);
  }

  disconnectSocket() {
    if (this.stompClient.active) {
      this.stompClient.deactivate();
    }
  }

  sendMessage(object: any) {
    this.stompClient.publish({
      destination: '/app/resume',
      body: JSON.stringify(object),
    });
  }

  extractSimpSessionId() {
    const sock = this.socket as any;
    const extractedSimpSessionId = /\/([^\/]+)\/websocket/.exec(
      sock._transport.url
    );
    if (
      extractedSimpSessionId != null &&
      typeof extractedSimpSessionId[1] != 'undefined'
    ) {
      this.simpSessionId = extractedSimpSessionId[1];
    }
    return this.simpSessionId;
  }
}
