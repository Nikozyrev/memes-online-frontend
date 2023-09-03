import { Stage } from './game-info.model';
import { IMeme, ISelectedMeme } from './meme.model';
import { ISituation } from './situation.model';
import { IUser } from './user.model';

export interface ISocketMessageBody {
  action: string;
  gameInfo: IGameInfo;
}

export interface IGameInfo {
  activeUserId: number;
  activeUserName: string;
  description: string;
  error: string | null;
  sessionId: number;
  hostUserId: number;
  hostUserName: string;
  stageInfo: string;
  round: string;
  stage: Stage;
  second: string;
  hand: IMeme[] | null;
  winHand: IMeme[];
  users: IUser[];
  situations: ISituation[] | null;
  selectedSituation: ISituation | null;
  selectedMeme: IMeme | null;
  selectedMemes: ISelectedMeme[] | null;
  currentRoundWinner: ISelectedMeme | null;
}
