import { RandomListMapper } from 'Config/Mappers/RandomList.mapper.dto';
import { IArrayRandomizer } from 'Core/Adapters/IRandomizer';
import {
  CreateListRequestDto,
  FindListRequestDto,
} from 'Core/Dtos/RandomList/RandomList.dtos';
import { IMangaRepository } from 'Core/Ports/IMangas.repository';
import { IRandomListRepository } from 'Core/Ports/IRandomLists.repository';
import { IRandomListService } from 'Core/Ports/IRandomLists.service';

export interface RandomListServiceOptions {
  randomListRepository: IRandomListRepository;
  mangaRepository: IMangaRepository;
  randomizer: IArrayRandomizer;
}

export class RandomListService implements IRandomListService {
  private readonly _listRepo: IRandomListRepository;
  private readonly _mangaRepo: IMangaRepository;
  private readonly _randomizer: IArrayRandomizer;
  constructor({
    randomListRepository,
    mangaRepository,
    randomizer,
  }: RandomListServiceOptions) {
    this._listRepo = randomListRepository;
    this._mangaRepo = mangaRepository;
    this._randomizer = randomizer;
  }

  public async create(data: Omit<CreateListRequestDto, 'generated' | 'seed'>) {
    const mangaResults = await this._mangaRepo.findFiltered(data);
    const { list, seed } = await this._randomizer.randomize(
      mangaResults.map((manga) => manga.al_id)
    );
    const randomList = await this._listRepo.save({
      includeFilters: data.includeFilters,
      excludeFilters: data.excludeFilters,
      generated: list,
      seed: seed,
    });
    return RandomListMapper.toCreateResponseDto(randomList);
  }
  public async find(data: FindListRequestDto) {
    

  }
}
