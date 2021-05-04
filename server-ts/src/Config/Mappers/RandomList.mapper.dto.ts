import {
  CreateListRequestDto,
  CreateListResponseDto,
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
}
