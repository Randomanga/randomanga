import { IMangaModel } from './../../../Data/Models/Manga.model';
import { IUserModel } from 'Data/Models/User.model';

export class RequestDailyDto {
  user: IUserModel | null;
}
export class ResponseDailyDto {
  al_id: IMangaModel['al_id'];
  title: IMangaModel['title'];
  description: IMangaModel['description'];
  genre: IMangaModel['genre'];
  tags: IMangaModel['tags'];
  banner: IMangaModel['banner'];
  cover_image: IMangaModel['cover_image'];
  likes_count: number;
  liked: boolean;
}
