import { IUser } from './user.model';

export interface IMeme {
  id: number;
  url: string;
}

export interface ISelectedMeme {
  user: IUser;
  meme: IMeme;
}
