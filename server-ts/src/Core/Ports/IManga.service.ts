import { IMangaModel } from 'Data/Models/Manga.model';
import { RequestLikeDto } from './../Dtos/Manga/Manga.dtos';
import { IUserModel } from './../../Data/Models/User.model';
import { RequestDailyDto } from 'Core/Dtos/Manga/Manga.dtos';
export interface IMangaService {
  find(data: any): Promise<any>;
  setLikeStatus(data: RequestLikeDto): Promise<void>;
  getLikeStatus(data: {
    id: number | string;
    user: IUserModel;
  }): Promise<boolean>;
  getRelated(id: number | string): Promise<Number[]>;
  getDaily(
    data: RequestDailyDto
  ): Promise<IMangaModel & { likes_count: number; liked: boolean }>;
}
