import { IUser } from './user.model';

export interface IGameInfo {
  stage: Stage | null;
  round: string | null;
  second: string | null;
  activeUser: IUser | null;
}

export enum Stage {
  one = '1',
  two = '2',
  three = '3',
  four = '4',
}
