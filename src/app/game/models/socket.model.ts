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
  stage: string;
  second: string;
  hand: Meme[];
  winHand: Meme[];
  users: User[];
  situations: Situation[];
  selectedSituation: Situation | null;
  selectedMeme: Meme | null;
  selectedMemes: SelectedMeme[];
  winnerMeme?: Meme | null;
}

export interface Meme {
  id: number;
  url: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Situation {
  id: number;
  situation: string;
  shortDescription: any;
  description: any;
}

export interface SelectedMeme {
  user: User;
  meme: Meme;
}
