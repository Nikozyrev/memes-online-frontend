import { IUser } from '../../models/user.model';

export interface IGameStatusState {
  connected: boolean;
  sessionId: number | null;
  error: string | null;
  user: IUser | null;
}
