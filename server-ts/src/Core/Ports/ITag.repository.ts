import { ITagModel } from 'Data/Models/Tag.model';

export interface ITagRepository {
  findByCategory(category: string): Promise<ITagModel[]>;
}
