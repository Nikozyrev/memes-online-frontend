import { Stage } from './game-info.model';
import { IMeme, ISelectedMeme } from './meme.model';
import { ISituation } from './situation.model';
import { IUser } from './user.model';

export interface ISocketMessageBody {
  action: string;
  gameInfo: IGameInfoFromServer;
}

export interface IGameInfoFromServer {
  sessionId: number | null;
  activeUserId: number;
  activeUserName: string;
  description: string;
  error: string | null;
  hostUserId: number;
  hostUserName: string;
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
