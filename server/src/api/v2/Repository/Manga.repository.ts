import { UserDTO } from './../Auth/Auth.dtos';
import { IMangaRepository } from './IMangaRepository';

export class MangaRepository implements IMangaRepository {
  constructor(private readonly mangaModel: Models.MangaModel, private readonly dailyModel: Models.DailyModel) {}

  async getRandomDaily(user: UserDTO) {
    const manga = await this.dailyModel.aggregate([
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
    if (manga.length === 0) {
      throw new Error('Critical Error! Daily manga not found.');
    }
    console.log('%o', manga);
    return manga[0].manga;
  }
  async findByAlId(al_id: Number) {
    const manga = await this.mangaModel.findById({ al_id: al_id }).lean();
    return manga;
  }
  async likeManga(al_id: Number, userID: UserDTO['_id']) {
    await this.mangaModel.updateOne({ al_id: al_id }, { $addToSet: { likes: userID } });
  }
  async unlikeManga(al_id: Number, userID: UserDTO['_id']) {
    await this.mangaModel.updateOne({ al_id: al_id }, { $pull: { likes: userID } });
  }
  async getLikeStatus(al_id: Number, userID: UserDTO['_id']) {
    const result = await this.mangaModel.findOne(
      { al_id: al_id },
      {
        likes: {
          $elemMatch: { $eq: userID },
        },
      },
    );
    const status = result.likes.length === 0 ? false : true;
    return status;
  }
  async getRelated(al_id: Number) {
    const mangaRecord = await this.mangaModel
      .findOne({ al_id: al_id }, { al_id: 1, _id: 0 })
      .populate({
        path: 'related',
        select: {
          likes_count: 1,
          al_id: 1,
          _id: 0,
        },
      })
      .lean();
    return mangaRecord;
  }
}
