import { IUserModel } from './../../../Data/Models/User.model';
import { IMangaModel } from './../../../Data/Models/Manga.model';
import { IRandomListModel } from 'Data/Models/RandomList.model';

export class RequestDailyDto {
  user?: IUserModel;
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

export class RequestLikeDto {
  id: number;
  user: IUserModel;
  status: boolean;
}
export class RequestLikeStatusDto {
  id: string;
  user: IUserModel;
}
export class ResponseLikeStatusDto {
  id: number | string;
  liked: boolean;
}

export class ResponseRelatedDto {
  id: string;
  related: IMangaModel[];
}

export type FindFilteredRequestDto = Pick<
  IRandomListModel,
  'includeFilters' | 'excludeFilters'
>;
