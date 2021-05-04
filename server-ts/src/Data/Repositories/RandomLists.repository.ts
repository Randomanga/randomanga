import {
  CreateListRequestDto,
  FindListRequestDto,
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
    const perPage = 50;
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
}
