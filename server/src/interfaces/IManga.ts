import { Document } from 'mongoose';
import { IUser } from './IUser';
export interface IManga {
  likes: Array<IUser['_id']>;
  al_id: Number;
  title: String;
  description: String;
  demographic: [];
  genre: String[];
  tags: String[];
  related: IManga[];
  banner: String;
  cover_image: {
    extraLarge: String;
    large: String;
    medium: String;
  };
  likes_count: never;
  like_status: Boolean;
  al_url: String;
}

export interface IMangaSearchDTO {
  al_id: IManga['al_id'];
}
