import { RandomListMapper } from 'Config/Mappers/RandomList.mapper.dto';
import {
  CreateListRequestDto,
  FindListRequestDto,
  ListInfoRequestDto,
} from 'Core/Dtos/RandomList/RandomList.dtos';
import {
  FindListResponse,
  IRandomListRepository,
} from 'Core/Ports/IRandomLists.repository';
import RandomListModel from 'Data/Models/RandomList.model';

export class RandomListRepository implements IRandomListRepository {
  private _listsModel = RandomListModel;

  public async save(data: CreateListRequestDto) {
    const list = new this._listsModel({
      ...data,
      count: data.generated.length,
    });
    return list.save();
  }

  public async find(data: FindListRequestDto) {
    const perPage = 20;
    const offset = (Math.max(1, data.page) - 1) * perPage;
    try {
      const list = await this._listsModel
        .findOne({ _id: data.id }, { generated: { $slice: [offset, perPage] } })
        .orFail(new Error('List not found. '));
      return list;
    } catch (err) {
      throw new Error(
        'There was an error, make sure all provided data is in correct format.'
      );
    }
  }
  public async listInfo(data: ListInfoRequestDto) {
    const list = await this._listsModel
      .findOne(
        { _id: data.id },
        { count: 1, includeFilters: 1, excludeFilters: 1 }
      )
      .orFail(new Error('List not found'));
    const lastPage = Math.ceil(list.count / 50);
    return RandomListMapper.toListInfoResponseDto({
      count: list.count,
      includeFilters: list.includeFilters,
      excludeFilters: list.excludeFilters,
      lastPage,
    });
  }
}
