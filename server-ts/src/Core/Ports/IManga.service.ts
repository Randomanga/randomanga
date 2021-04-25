import { RequestLikeDto } from './../Dtos/Manga/Manga.dtos';
import { IUserModel } from './../../Data/Models/User.model';
import { IMangaModel } from './../../Data/Models/Manga.model';
import { RequestDailyDto } from 'Core/Dtos/Manga/Manga.dtos';
export interface IMangaService {
  find(data: any): Promise<any>;
  setLikeStatus(data: RequestLikeDto): Promise<void>;
  getRelated(data: any): Promise<any[]>;
  getDaily(
    data: RequestDailyDto
  ): Promise<IMangaModel & { likes_count: number; liked: boolean }>;
}
