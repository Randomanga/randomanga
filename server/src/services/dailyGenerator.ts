import { Inject, Service, Container } from 'typedi';
import { Logger } from 'winston';
const fetch = require('node-fetch');

@Service()
export default class DailyGeneratorService {
  constructor(
    @Inject('logger') private logger: Logger,
    @Inject('mangaModel') private mangaModel: Models.MangaModel,
    @Inject('dailyMangaModel') private dailyMangaModel: Models.DailyModel,
  ) {}
  private query = `
    query($page: Int){
      Page(page: $page,perPage: 1){
        media(type: MANGA,isAdult: false, tagCategory_not_in: ["Sexual Content"],averageScore_greater: 65) {
          id
          bannerImage
        }
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
      }
    }
  `;
  private url = 'https://graphql.anilist.co';

  private async getPageCountAL() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: this.query,
        variables: { page: 1 },
      }),
    };

    const response = await fetch(this.url, options);
    const body = await response.json();
    return body['data']['Page']['pageInfo']['lastPage'];
  }
  private async requestAL(mIndex: number) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: this.query,
        variables: { page: mIndex },
      }),
    };

    const response = await fetch(this.url, options);
    return response;
  }

  private async getRandomFromAL() {
    try {
      const pageCount = await this.getPageCountAL();
      const randIndex = Math.floor(Math.random() * pageCount);
      const res = await this.requestAL(randIndex);
      const body = await res.json();
      return body['data']['Page']['media'][0];
    } catch (err) {
      throw err;
    }
  }

  public async GenerateManga() {
    try {
      const manga = await this.getRandomFromAL();
      if (manga.bannerImage != null) {
        const localManga = await this.mangaModel.findOne({ al_id: manga.id });
        const mangaRecord = await this.dailyMangaModel.create({
          manga: localManga._id,
          date: new Date().toISOString().split('T')[0],
        });
        this.logger.silly(`Generated random manga with Al ID: ${manga.id} and local: ${localManga._id}`);
        return;
      }
      throw 'Banner not available.';
    } catch (e) {
      throw e;
    }
  }
}
