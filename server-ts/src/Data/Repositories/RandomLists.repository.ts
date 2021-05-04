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
    const skipValue = Number(data.page ?? 0) * 50;
    const limitValue = 50;
    const list = await this._listsModel.aggregate<FindListResponse>([
      {
        $match: {
          _id: data._id,
        },
      },
      {
        $unwind: '$generated',
      },
      {
        $group: {
          count: '$count',
          seed: '$seed',
          generated: {
            $push: '$generated',
          },
        },
      },
      {
        $project: {
          generated: {
            $slice: ['$generated'],
            skipValue,
            limitValue,
          },
        },
      },
    ]);
    console.log(list);
    return list;
  }
}
