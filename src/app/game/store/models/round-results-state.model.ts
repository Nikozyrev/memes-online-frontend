import { IMeme } from '../../models/meme.model';

export interface IRoundResultsState {
  roundMemes: IMeme[];
  roundWinner: IMeme | null;
}
