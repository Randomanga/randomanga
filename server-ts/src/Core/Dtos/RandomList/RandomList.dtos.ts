import { IRandomListModel } from 'Data/Models/RandomList.model';

export type CreateListRequestDto = Omit<IRandomListModel, '_id' | 'count'>;

export type CreateListResponseDto = Pick<IRandomListModel, '_id' | 'count'>;

export type FindListRequestDto = Pick<IRandomListModel, '_id'> & {
  page?: number | string;
};

export class FindListResponseDto {
  seed: string;
  list: Array<string | number>;
  currentPage: number | string;
  lastPage: number | string;
}
