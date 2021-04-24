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
  async getRelated(data: any) {}
  async setLikeStatus(data: any) {}
}
