import { SaveListRequestDto } from 'Core/Dtos/List/CreateList.dtos';
import { IListModel } from 'Data/Models/List.model';
import { GetListDto } from 'Core/Dtos/List/GetList.dtos';
import { IUserModel } from 'Data/Models/User.model';

export interface IListRepository {
  findOneList(id: string): Promise<IListModel | null>;
  find(data: GetListDto): Promise<IListModel[]>;
  save(data: SaveListRequestDto): Promise<any>;
  delete(id: string): Promise<boolean>;
  like(id: string, userID: IUserModel['_id']): Promise<IListModel | null>;
  unlike(id: string, userID: IUserModel['_id']): Promise<IListModel | null>;
  count(data: GetListDto): Promise<number>;
}
