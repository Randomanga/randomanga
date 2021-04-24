import { IMangaModel } from './../../Data/Models/Manga.model';
import { RequestDailyDto } from 'Core/Dtos/Manga/Manga.dtos';
export interface IMangaService {
  find(data: any): Promise<any>;
  setLikeStatus(data: any): Promise<any>;
  getRelated(data: any): Promise<any[]>;
  getDaily(
    data: RequestDailyDto
  ): Promise<IMangaModel & { likes_count: number; liked: boolean }>;
}
