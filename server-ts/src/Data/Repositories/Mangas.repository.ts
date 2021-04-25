import { IMangaRepository } from 'Core/Ports/IMangas.repository';
import DailyMangaModel from 'Data/Models/DailyManga.model';
import MangaModel from 'Data/Models/Manga.model';
import { IUserModel } from 'Data/Models/User.model';

export class MangaRepository implements IMangaRepository {
  private _manga = MangaModel;
  private _daily = DailyMangaModel;
  public async findOneManga(id: number) {
    return await this._manga.findOne({ al_id: id });
  }
  public async getDaily(user?: IUserModel) {
    const [{ manga }]: any = await this._daily
      .find({}, {}, { sort: { _id: -1 }, limit: 1 })
      .populate('manga');
    return {
      ...manga.toObject(),
      liked: await this.getLikeStatus(manga.al_id, user ? user._id : undefined),
      likes_count: manga.likes.length,
    };
  }
  async likeManga(id: number, userID: IUserModel['_id']) {
    await this._manga
      .updateOne({ al_id: id }, { $addToSet: { likes: userID } })
      .orFail(Error('Manga not found'));
  }
  async dislikeManga(id: number, userID: IUserModel['_id']) {
    await this._manga
      .updateOne({ al_id: id }, { $pull: { likes: userID } })
      .orFail(Error('Manga not found'));
  }
  async getLikeStatus(id: number, userID?: IUserModel['_id']) {
    const result = await this._manga
      .findOne(
        { al_id: id },
        {
          likes: {
            $elemMatch: { $eq: userID },
          },
        }
      )
      .orFail(Error('Manga not found'));
    return result.likes.length > 0;
  }
  async findRelated(id: number) {
    return [];
  }
}
