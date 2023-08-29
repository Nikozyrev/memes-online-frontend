import { IMeme } from '../../models/meme.model';

export interface IPlayerMemesState {
  memesHand: IMeme[];
  selectedMeme: IMeme | null;
}
