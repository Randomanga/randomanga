import { SaveListRequestDto } from 'Core/Dtos/List/CreateList.dtos';
import { GetListDto } from 'Core/Dtos/List/GetList.dtos';
import { IListRepository } from 'Core/Ports/IList.repository';
import { IListService } from 'Core/Ports/IList.service';

interface IListServiceOptions {
  listRepo: IListRepository;
}

export class ListService implements IListService {
  private readonly _listRepo: IListRepository;
  constructor({ listRepo }: IListServiceOptions) {
    this._listRepo = listRepo;
  }

  public async find(data: GetListDto) {
    const lists = await this._listRepo.find(data);
    const total = await this._listRepo.count(data);
    const hasNextPage = data.page * 50 < total;

    return {
      page: lists,
      pageInfo: { total, hasNextPage, currentPage: data.page },
    };
  }

  public async findOneList(id: string) {
    const list = await this._listRepo.findOneList(id);
    return list;
  }
  public async save(list: SaveListRequestDto) {
    const saved = await this._listRepo.save(list);
    return saved;
  }
  public async delete(id: string) {
    const deleted = await this._listRepo.delete(id);
    return deleted;
  }
  public async like(id: string, userId: string) {
    const liked = await this._listRepo.like(id, userId);
    return liked;
  }
  public async unlike(id: string, userId: string) {
    const unliked = await this._listRepo.unlike(id, userId);
    return unliked;
  }
}
