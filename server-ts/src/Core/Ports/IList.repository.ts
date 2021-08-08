import { SaveListRequestDto } from 'Core/Dtos/List/CreateList.dtos';
import { IListModel } from 'Data/Models/List.model';
import { IUserModel } from 'Data/Models/User.model';

export interface IListRepository {
  findOneList(id: string): Promise<IListModel | null>;
  save(data: SaveListRequestDto): Promise<IListModel>;
  delete(id: string): Promise<boolean>;
  like(id: string, userID: IUserModel['_id']): Promise<boolean>;
  unlike(id: string, userID: IUserModel['_id']): Promise<boolean>;
}
s;
