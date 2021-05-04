import {
  CreateListRequestDto,
  CreateListResponseDto,
  FindListRequestDto,
  FindListResponseDto,
} from 'Core/Dtos/RandomList/RandomList.dtos';

export interface IRandomListService {
  find(data: FindListRequestDto): Promise<FindListResponseDto>;
  create(
    data: Omit<CreateListRequestDto, 'generated' | 'seed'>
  ): Promise<CreateListResponseDto>;
}
