import { EventEmitter } from 'events';
import { Service, Inject } from 'typedi';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';
import { IManga, IMangaSearchDTO } from '../interfaces/IManga';
import { Document } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import { reject } from 'lodash';

@Service()
export default class MangaService {
  constructor(
    @Inject('mangaModel') private mangaModel: Models.MangaModel,
    @Inject('logger') private logger,
    @Inject('dailyMangaModel') private dailyMangaModel: any,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async getManga(search: IMangaSearchDTO): Promise<IManga> {
    const mangaRecord = await this.mangaModel.findOne({ al_id: search.al_id }, { related: 0 });
    if (!mangaRecord) {
      throw new Error('Manga does not exist');
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
      throw Error('Manga does not exist');
    }
    const manga = mangaRecord.toObject();
    return manga;
  }
  public async getRandomDaily(): Promise<IManga> {
    const mangaRecord = await this.dailyMangaModel
      .find({})
      .sort({ _id: -1 })
      .limit(1)
      .populate({
        path: 'manga',
        select: {
          title: 1,
          likes_count: 1,
          al_id: 1,
          coverImage: 1,
          banner: 1,
          description: 1,
          genre: 1,
          tags: 1,
          _id: 0,
        },
      });
    if (!mangaRecord) {
      throw 'Error! 502,  Fetching daily manga from the database failed';
    }

    let manga: IManga = { ...mangaRecord['0'].toObject().manga };
    manga.likeStatus = false;

    return manga;
  }
  public async getLikeStatus(manga: IManga, user: IUser): Promise<boolean> {
    return true;
  }
}
