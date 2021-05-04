import { FindFilteredRequestDto } from 'Core/Dtos/Manga/Manga.dtos';
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
    const manga = await this._manga
      .findOne({ al_id: id }, { al_id: 1 })
      .populate('related', {
        al_id: 1,
        title: 1,
        description: 1,
        genre: 1,
        tags: 1,
        cover_image: 1,
        banner: 1,
        _id: 0,
      })
      .orFail();

    return manga.related;
  }

  private validateFilters(data: FindFilteredRequestDto) {
    return Object.fromEntries(
      Object.entries(data).flatMap(([filterType, filters]) =>
        Object.entries(filters)
          .filter(([, values]) => values.length)
          .map(([key, value]) =>
            filterType === 'includeFilters'
              ? [key, { $elemMatch: { $in: [...value] } }]
              : [key, { $elemMatch: { $nin: [...value] } }]
          )
      )
    );
  }

  async findFiltered(data: FindFilteredRequestDto) {
    const filters = this.validateFilters(data);
    const results = await this._manga.find(filters, { al_id: 1 }).orFail();
    return results;
  }
}
