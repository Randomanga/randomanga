import {
  CreateDailyMangaDto,
  FindDailyDto,
  FindFilteredRequestDto,
} from 'Core/Dtos/Manga/Manga.dtos';
import { IMangaRepository } from 'Core/Ports/IMangas.repository';
import DailyMangaModel from 'Data/Models/DailyManga.model';
import MangaModel, { IMangaModel } from 'Data/Models/Manga.model';
import { IUserModel } from 'Data/Models/User.model';
import { FilterQuery } from 'mongoose';
type FilterFormat = Record<
  string,
  Record<'$elemMatch', Partial<Record<'$in' | '$nin', string[]>>>
>;
export class MangaRepository implements IMangaRepository {
  private _manga = MangaModel;
  private _daily = DailyMangaModel;
  public async findOneManga(id: number) {
    return await this._manga.findOne({ al_id: id });
  }
  public async saveDaily(data: CreateDailyMangaDto) {
    const dailyManga = new this._daily({ manga: data._id });
    return dailyManga.save();
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
      .findOne({ al_id: id }, { al_id: 1, related: 1 })
      .orFail();
    return manga.related;
  }

  private validateFilters(data: FindFilteredRequestDto) {
    return Object.entries(data).reduce<FilterFormat>(
      (prev, [filterType, keys]) => {
        Object.entries(keys).forEach(([key, values]) => {
          if (!values.length) {
            return;
          }

          if (!prev[key]) {
            prev[key] = { $elemMatch: {} };
          }

          const inOrExclude = filterType === 'includeFilters' ? '$in' : '$nin';

          if (!prev[key].$elemMatch[inOrExclude]) {
            prev[key].$elemMatch[inOrExclude] = values;
          } else {
            prev[key].$elemMatch[inOrExclude]!.concat(values);
          }
        });

        return prev;
      },
      {}
    );
  }

  async findFiltered(data: FindFilteredRequestDto) {
    const filters = this.validateFilters(data);
    const results = await this._manga.find(filters, { al_id: 1 }).orFail();
    return results;
  }
  async countCustomFiltered(filter: FilterQuery<IMangaModel>) {
    return this._manga.countDocuments(filter);
  }
  async findDaily(data: FindDailyDto) {
    const manga = await this._manga.find({
      tags: {
        $elemMatch: {
          $nin: data.excludeFilters.tags,
        },
      },
      banner: {
        $ne: null,
      },
    });
    return manga;
  }
}
