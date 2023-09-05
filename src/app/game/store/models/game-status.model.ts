import { IUser } from '../../models/user.model';

export interface IGameStatusState {
  connected: boolean;
  user: IUser | null;
}
