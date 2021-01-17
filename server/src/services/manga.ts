import { EventEmitter } from 'events';
import { Service, Inject } from 'typedi';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';
import { IManga, IMangaSearchDTO } from '../interfaces/IManga';

@Service()
export default class MangaService {
  constructor(
    @Inject('mangaModel') private mangaModel: Models.MangaModel,
    @Inject('logger') private logger,
    @Inject('dailyMangaModel') private dailyMangaModel: any,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async getManga(search: IMangaSearchDTO): Promise<{ manga: IManga }> {
    const mangaRecord = await this.mangaModel.findOne({ al_id: search.al_id }, { related: 0 });
    if (!mangaRecord) {
      throw new Error('Manga does not exist');
    }
    const manga = mangaRecord.toObject();
    return { manga };
  }
  public async getMangaRelations(search: IMangaSearchDTO): Promise<{ manga: IManga }> {
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
    return { manga };
  }
  public async getRandomDaily(): Promise<{ manga: IManga }> {
    const mangaRecord = await this.dailyMangaModel
      .find({ date: new Date().toISOString().split('T')[0] })
      .populate('manga');
    if (!mangaRecord) {
      throw Error('Error in retriving daily manga');
    }
    const manga = mangaRecord;
    return { manga };
  }
}
