import { CreateListRequestDto } from 'Core/Dtos/RandomList/RandomList.dtos';
import { IListRepository } from 'Core/Ports/IList.repository';
import ListModel, { IListModel } from 'Data/Models/List.model';

export class ListRepository implements IListRepository {
  private _model = ListModel;

  public async findOneList(id: string) {
    const data = await this._model
      .findOne({ _id: id })
      .populate('author', { username: 1 })
      .orFail(new Error('List not found'));
    return data.toObject();
  }
  public async save(data: CreateListRequestDto) {
    const list = new this._model(data);
    return (await list.save()).toObject();
  }

  public async delete(id: string) {
    const { deletedCount } = await this._model.deleteOne({ _id: id });
    return deletedCount ? deletedCount >= 1 : false;
  }
  public async like(id: string, userID: string) {
    return true;
  }
  public async unlike(id: string, userID: string) {
    return true;
  }
}
