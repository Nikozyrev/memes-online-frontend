import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { RxStompConfig } from '@stomp/rx-stomp';
import { filter, map, tap } from 'rxjs';
import SockJS from 'sockjs-client/dist/sockjs.min.js';
import {
  ActionTypes,
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
  private stompClient = new RxStomp();
  private socket?: WebSocket;
  private simpSessionId?: string;

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
      extractedSimpSessionId &&
      extractedSimpSessionId[1] !== undefined
    ) {
      this.simpSessionId = extractedSimpSessionId[1];
    }
    return this.simpSessionId;
  }
}
