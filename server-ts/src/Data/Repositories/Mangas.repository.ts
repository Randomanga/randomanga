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
    const result = await this._daily.aggregate([
      {
        $match: {},
      },
      {
        $sort: { _id: -1 },
      },
      {
        $lookup: {
          from: 'mangas',
          as: 'manga',
          let: { id: '$manga' },
          pipeline: [
            {
              $match: { $expr: { $eq: ['$_id', '$$id'] } },
            },
            {
              $project: {
                likes_count: {
                  $size: '$likes',
                },
                title: 1,
                banner: 1,
                description: 1,
                cover_image: 1,
                genre: 1,
                tags: 1,
                al_id: 1,
                _id: 0,
                liked: {
                  $in: [user ? user._id : null, '$likes'],
                },
              },
            },
          ],
        },
      },

      {
        $unwind: '$manga',
      },
      {
        $limit: 1,
      },
    ]);
    return result[0].manga;
  }
  async likeManga(id: number, userID: IUserModel['_id']) {
    await this._manga.updateOne(
      { al_id: id },
      { $addToSet: { likes: userID } }
    );
  }
  async dislikeManga(id: number, userID: IUserModel['_id']) {
    await this._manga.updateOne({ al_id: id }, { $pull: { likes: userID } });
  }
  async getLikeStatus(id: number, userID: IUserModel['_id']) {
    const result = await this._manga.findOne(
      { al_id: id },
      {
        likes: {
          $elemMatch: { $eq: userID },
        },
      }
    );
    if (!result) throw Error('Manga not found');
    const status = result.likes.length === 0 ? false : true;
    return status;
  }
  async findRelated(id: number) {
    return [];
  }
}
