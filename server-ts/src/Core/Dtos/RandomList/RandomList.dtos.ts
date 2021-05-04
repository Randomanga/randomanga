import { IRandomListModel } from 'Data/Models/RandomList.model';

export type CreateListRequestDto = Omit<IRandomListModel, '_id' | 'count'>;

export type CreateListResponseDto = Pick<IRandomListModel, '_id' | 'count'>;

export type FindListRequestDto = {
  id: string;
  page: number;
};

export class FindListResponseDto {
  count: number;
  list: Array<string | number>;
  lastPage: number | string;
  hasNextPage: boolean;
}
