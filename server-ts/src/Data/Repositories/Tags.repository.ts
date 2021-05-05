import { ITagRepository } from 'Core/Ports/ITag.repository';
import TagModel, { ITagModel } from 'Data/Models/Tag.model';

export class TagRepository implements ITagRepository {
  private _tags = TagModel;
  public async findByCategory(category: string) {
    const results = await this._tags
      .find({ category })
      .orFail(new Error('No tags found with given category'));
    return results;
  }
}
