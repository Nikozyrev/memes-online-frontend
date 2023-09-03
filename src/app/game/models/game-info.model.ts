export interface IGameInfo {
  sessionId: number | null;
  stage: Stage | null;
  round: string | null;
  second: string | null;
  error: string | null;
}

export enum Stage {
  one = '1',
  two = '2',
  three = '3',
  four = '4',
}
