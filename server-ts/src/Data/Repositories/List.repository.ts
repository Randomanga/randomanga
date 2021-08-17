import { GetListDto } from 'Core/Dtos/List/GetList.dtos';
import { CreateListRequestDto } from 'Core/Dtos/RandomList/RandomList.dtos';
import { IListRepository } from 'Core/Ports/IList.repository';
import ListModel, { IListModel } from 'Data/Models/List.model';

export class ListRepository implements IListRepository {
  private _model = ListModel;

  public async find(data: GetListDto) {
    const findQuery: any = {};
    if (data.query) findQuery['$text'] = { $search: data.query };
    const sortQuery: any = {};
    if (data.sort && data.order)
      data.sort === 'popularity'
        ? (sortQuery['likesCount'] = data.order ?? 'desc')
        : (sortQuery[data.sort ?? 'title'] = data.order ?? 'asc');

    return this._model
      .find(findQuery)
      .sort(sortQuery)
      .skip(data.page - 1 ?? 0 * 20)
      .limit(20)
      .populate('author', { username: 1 });
  }
  public async count(data: GetListDto) {
    const findQuery: any = {};
    if (data.query) findQuery['$text'] = { $search: data.query };
    return this._model.countDocuments(findQuery);
  }
  public async findOneList(id: string) {
    const data = await this._model
      .findOne({ _id: id })
      .populate('author', { username: 1 })
      .orFail(new Error('List not found'));
    return data.toObject();
  }
  //@ts-ignore
  public async save(data: CreateListRequestDto) {
    const list = new this._model(data);
    return (await list.save()).toObject();
  }

  public async delete(id: string) {
    const { deletedCount } = await this._model.deleteOne({ _id: id });
    return deletedCount ? deletedCount >= 1 : false;
  }
  public async like(id: string, userID: string) {
    return this._model.findByIdAndUpdate(
      id,
      {
        $inc: { likesCount: 1 },
        $addToSet: { likes: userID },
      },
      { new: true }
    );
  }
  public async unlike(id: string, userID: string) {
    return this._model.findByIdAndUpdate(
      id,
      {
        $inc: { likesCount: -1 },
        $pull: { likes: userID },
      },
      { new: true }
    );
  }
}
