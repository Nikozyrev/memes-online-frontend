import { Stage } from '../../models/game-info.model';

export interface IGameInfoState {
  sessionId: number | null;
  stage: Stage | null;
  round: string | null;
  second: string | null;
  error: string | null;
}
