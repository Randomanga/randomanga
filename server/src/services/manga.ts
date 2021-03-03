//import { EventEmitter } from 'events';
import { Service, Inject } from 'typedi';
//import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
//import events from '../subscribers/events';
import { IManga, IMangaSearchDTO } from '../interfaces/IManga';
import { IUser } from '../interfaces/IUser';
import { Document } from 'mongoose';
import { Logger } from 'winston';
import HttpException from '../errors/HttpException';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';

@Service()
export default class MangaService {
  constructor(
    @Inject('mangaModel') private mangaModel: Models.MangaModel,
    @Inject('logger') private logger: Logger,
    @Inject('dailyMangaModel') private dailyMangaModel: any, // @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async getManga(search: IMangaSearchDTO): Promise<IManga & Document> {
    const mangaRecord = await this.mangaModel.findOne({ al_id: search.al_id }, { related: 0 });

    if (!mangaRecord) {
      throw new NotFound('Manga does not exist');
    }
    const manga = mangaRecord.toObject();
    return manga;
  }
  public async getMangaRelations(search: IMangaSearchDTO): Promise<IManga> {
    const mangaRecord = await this.mangaModel.findOne({ al_id: search.al_id }, { al_id: 1, title: 1 }).populate({
      path: 'related',
      select: {
        title: 1,
        likes_count: 1,
        al_id: 1,
        coverImage: 1,
        banner: 1,
        description: 1,
        genre: 1,
      },
    });
    if (!mangaRecord) {
      throw new NotFound('Manga does not exist');
    }
    const manga = mangaRecord.toObject();
    return manga;
  }
  public async getRandomDaily(user?: IUser): Promise<IManga> {
    const mangaRecord = await this.dailyMangaModel.aggregate([
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

    if (mangaRecord.length === 0) {
      const err = new ServerError('Critical error! Daily manga not found! ');
      throw err;
    }

    return mangaRecord[0].manga;
  }
  public async getLikeStatus(manga: IMangaSearchDTO, user: IUser): Promise<boolean> {
    try {
      const result = await this.mangaModel.findOne(
        {
          al_id: manga.al_id,
        },
        {
          likes: {
            $elemMatch: { $eq: user._id },
          },
        },
      );
      if (!result) throw new NotFound('Manga does not exist');
      if (result.likes.length === 0) return false;
      else return true;
    } catch (e) {
      throw e;
    }
  }
  public async likeManga(manga: IMangaSearchDTO, user: IUser): Promise<void> {
    try {
      const record = await this.mangaModel.updateOne(
        { al_id: manga.al_id },
        {
          $addToSet: { likes: user._id },
        },
      );
    } catch (e) {
      throw new NotFound('Manga does not exist');
    }
  }
  public async unlikeManga(manga: IMangaSearchDTO, user: IUser): Promise<void> {
    try {
      await this.mangaModel.updateOne(
        {
          al_id: manga.al_id,
        },
        {
          $pull: { likes: user._id },
        },
      );
    } catch (e) {
      throw new NotFound('Manga does not exist');
    }
  }
}
