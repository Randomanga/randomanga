import { PageData } from 'Config/types/other/page.ds';
import { SaveListRequestDto } from 'Core/Dtos/List/CreateList.dtos';
import { GetListDto } from 'Core/Dtos/List/GetList.dtos';
import { IListModel } from 'Data/Models/List.model';
import { IUserModel } from 'Data/Models/User.model';

export interface IListService {
  findOneList(id: string): Promise<IListModel | null>;
  find(data: GetListDto): Promise<{ page: IListModel[]; pageInfo: PageData }>;
  save(data: SaveListRequestDto): Promise<IListModel>;
  delete(id: string): Promise<boolean>;
  like(id: string, userID: IUserModel['_id']): Promise<IListModel | null>;
  unlike(id: string, userID: IUserModel['_id']): Promise<IListModel | null>;
}
