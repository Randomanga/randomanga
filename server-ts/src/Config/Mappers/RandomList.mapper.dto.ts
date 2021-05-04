import {
  CreateListRequestDto,
  CreateListResponseDto,
  FindListRequestDto,
} from 'Core/Dtos/RandomList/RandomList.dtos';
import { IRandomListModel } from 'Data/Models/RandomList.model';

export class RandomListMapper {
  public static toCreateRequestDto(
    data: Omit<CreateListRequestDto, 'generated' | 'count' | 'seed'>
  ) {
    return {
      includeFilters: data.includeFilters,
      excludeFilters: data.excludeFilters,
    };
  }
  public static toCreateResponseDto(data: IRandomListModel) {
    return {
      _id: data._id,
      count: data.count,
    } as CreateListResponseDto;
  }
  public static toFindRequestDto(data: FindListRequestDto) {
    return {
      id: data.id,
      page: data.page,
    } as FindListRequestDto;
  }
}
