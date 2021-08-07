import {
  CreateDailyMangaDto,
  FindDailyDto,
  FindFilteredRequestDto,
} from 'Core/Dtos/Manga/Manga.dtos';
import { IDailyMangaModel } from 'Data/Models/DailyManga.model';
import { IMangaModel } from 'Data/Models/Manga.model';
import { FilterQuery } from 'mongoose';
import { IUserModel } from './../../Data/Models/User.model';

export interface IMangaRepository {
  findOneManga(id: number): Promise<IMangaModel | null>;
  findRelated(id: number | string): Promise<Number[]>;
  likeManga(id: number, userID: IUserModel['_id']): Promise<void>;
  dislikeManga(id: number, userID: IUserModel['_id']): Promise<void>;
  getLikeStatus(
    id: number | string,
    userID: IUserModel['_id']
  ): Promise<boolean>;
  saveDaily(data: CreateDailyMangaDto): Promise<IDailyMangaModel>;
  getDaily(
    user?: any
  ): Promise<IMangaModel & { likes_count: number; liked: boolean }>;
  findFiltered(data: FindFilteredRequestDto): Promise<IMangaModel[]>;
  countCustomFiltered(filter: FilterQuery<IMangaModel>): Promise<number>;
  findDaily(data: FindDailyDto): Promise<IMangaModel[]>;
}
