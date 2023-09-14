import { ISelectedMeme } from '../../models/meme.model';

export interface IRoundResultsState {
  roundMemes: ISelectedMeme[];
  roundWinner: ISelectedMeme | null;
  roundPreWinner: ISelectedMeme | null;
}
