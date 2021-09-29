import { RequestLikeDto } from './../Dtos/Manga/Manga.dtos';
import { IUserModel } from './../../Data/Models/User.model';
import { RequestDailyDto } from 'Core/Dtos/Manga/Manga.dtos';
import { IMangaRepository } from 'Core/Ports/IMangas.repository';
import { IMangaService } from 'Core/Ports/IManga.service';

export interface IMangaServiceOptions {
  mangaRepository: IMangaRepository;
}

export class MangaService implements IMangaService {
  private readonly _mangaRepo: IMangaRepository;
  constructor({ mangaRepository }: IMangaServiceOptions) {
    this._mangaRepo = mangaRepository;
  }
  async find(data: any) {
    const manga = await this._mangaRepo.findOneManga(80001);
  
    return manga;
  }
  async getDaily(data: RequestDailyDto) {
    const manga = await this._mangaRepo.getDaily(data.user);
    return manga;
  }
  async setLikeStatus(data: RequestLikeDto) {
    data.status
      ? await this._mangaRepo.likeManga(data.id, data.user._id)
      : await this._mangaRepo.dislikeManga(data.id, data.user._id);
  }
  async getLikeStatus(data: { id: number | string; user: IUserModel }) {
    const status = await this._mangaRepo.getLikeStatus(data.id, data.user._id);
    return status;
  }
  async getRelated(id: number) {
    const list = await this._mangaRepo.findRelated(id);
    return list;
  }
}
