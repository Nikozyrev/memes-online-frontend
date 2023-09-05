import { Stage } from '../../models/game-info.model';
import { IUser } from '../../models/user.model';

export interface IGameInfoState {
  round: string | null;
  stage: Stage | null;
  second: string | null;
  activeUser: IUser | null;
}
