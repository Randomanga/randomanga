import Agenda, { Job, JobAttributesData } from 'agenda';
import { container } from 'Config/DI/Container';
import { MangaMapper } from 'Config/Mappers/Manga.mapper.dto';
import { RandomListMapper } from 'Config/Mappers/RandomList.mapper.dto';
import { FindFilteredRequestDto } from 'Core/Dtos/Manga/Manga.dtos';
import { IMangaRepository } from 'Core/Ports/IMangas.repository';
import { ITagRepository } from 'Core/Ports/ITag.repository';
import { ITagModel } from 'Data/Models/Tag.model';
import random from 'random';

export interface IDailyMangaHandler {
  generate(job: Job, done: () => void): void;
}
interface DailyMangaHandlerOptions {
  mangaRepository: IMangaRepository;
  tagRepository: ITagRepository;
}
export class DailyMangaHandler implements IDailyMangaHandler {
  private readonly _mangaRepo: IMangaRepository;
  private readonly _tagRepo: ITagRepository;
  constructor({ mangaRepository, tagRepository }: DailyMangaHandlerOptions) {
    this._mangaRepo = mangaRepository;
    this._tagRepo = tagRepository;
  }
  private async getFilteredTags(): Promise<ITagModel['name'][]> {
    const tags = await this._tagRepo.findByCategory('Sexual Content');
    return tags.map((tag) => tag.name);
  }
  private async createPayload() {
    const tags = await this.getFilteredTags();
    return {
      excludeFilters: { genre: [], demographic: [], tags },
    };
  }
  public async generate(job: Job, done: () => void): Promise<void> {
    const payload = await this.createPayload();
    const count = await this._mangaRepo.countCustomFiltered(payload);
    const manga = await this._mangaRepo.findDaily(payload);
    const randomManga = manga[random.int(1, count)];
    const data = MangaMapper.toCreateDailyMangaDto(randomManga);
    await this._mangaRepo.saveDaily(data);
    done();
  }
}
