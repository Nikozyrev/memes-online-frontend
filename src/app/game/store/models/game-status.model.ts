import { IUser } from '../../models/user.model';

export interface IGameStatusState {
  connected: boolean;
  sessionId: number | null;
  user: IUser | null;
  error: string | null;
  paused: boolean;
  ended: boolean;
}
