import {
  CreateListRequestDto,
  FindListRequestDto,
} from 'Core/Dtos/RandomList/RandomList.dtos';
import { IRandomListModel } from 'Data/Models/RandomList.model';
export type FindListResponse = Pick<
  IRandomListModel,
  'count' | 'generated' | 'seed'
>;
export interface IRandomListRepository {
  save(data: CreateListRequestDto): Promise<IRandomListModel>;
  find(data: FindListRequestDto): Promise<FindListResponse[]>;
}
