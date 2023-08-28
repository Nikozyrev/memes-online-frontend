import { IMeme } from '../../models/meme.model';

export interface IMemesState {
  memesHand: IMeme[];
  selectedMeme: IMeme | null;
}
