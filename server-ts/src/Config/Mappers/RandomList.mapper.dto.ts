import {
  CreateListRequestDto,
  CreateListResponseDto,
  FindListRequestDto,
  ListInfoRequestDto,
  ListInfoResponseDto,
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
  public static toListInfoResponseDto(data: ListInfoResponseDto) {
    return {
      count: data.count,
      includeFilters: data.includeFilters,
      excludeFilters: data.excludeFilters,
      lastPage: data.lastPage,
    } as ListInfoResponseDto;
  }
  public static toListInfoRequestDto(data: ListInfoRequestDto) {
    return {
      id: data.id,
    } as ListInfoRequestDto;
  }
}
