import { Stage } from './game-info.model';
import { IMeme, ISelectedMeme } from './meme.model';
import { ISituation } from './situation.model';
import { IUser } from './user.model';

export enum ActionTypes {
  attachUser = 'attach_user',
  createSession = 'create_session',
  joinSession = 'join_session',
  finishSession = 'finish_session',
  gameMessage = 'game_message',
}

export interface IGameMessageBody {
  action: ActionTypes.gameMessage;
  gameInfo: IGameInfoFromServer;
}

export interface IAttachUserBody {
  action: ActionTypes.attachUser;
  success: boolean;
  error: string | null;
  user: IUser;
}

export type ISocketMessageBody = IGameMessageBody | IAttachUserBody;

export interface IGameInfoFromServer {
  sessionId: number | null;
  hostUser: IUser | null;
  activeUser: IUser | null;
  paused: boolean;
  ended: boolean;
  description: string;
  error: string | null;
  stageInfo: string | null;
  round: string | null;
  stage: Stage | null;
  second: string | null;
  hand: IMeme[] | null;
  winHand: IMeme[];
  users: IUser[];
  situations: ISituation[] | null;
  selectedSituation: ISituation | null;
  selectedMeme: IMeme | null;
  selectedMemes: ISelectedMeme[] | null;
  currentRoundWinner: ISelectedMeme | null;
}
