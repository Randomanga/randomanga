import { GetListDto } from 'Core/Dtos/List/GetList.dtos';
import { IListModel } from 'Data/Models/List.model';

export class ListMapper {
  public static toFindRequestDto(data: GetListDto) {
    return {
      sort: data.sort,
      page: data.page,
      order: data.order,
      query: data.query,
    } as GetListDto;
  }

  public static toWeb(data: IListModel) {
    return {
      title: data.title,
      description: data.description,
      list: data.list,
      author: data.author,
      likes: data.likes,
      _id: data._id,
    } as IListModel;
  }

  public static manyToweb(data: IListModel[]) {
    return data.map((entry) => ListMapper.toWeb(entry));
  }
}
