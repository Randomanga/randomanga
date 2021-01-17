import { Inject, Service, Container } from 'typedi';
const fetch = require('node-fetch');

@Service()
export default class DailyGeneratorService {
  constructor(
    @Inject('logger') private logger,
    @Inject('mangaModel') private mangaModel: Models.MangaModel,
    @Inject('dailyMangaModel') private dailyMangaModel,
  ) {}
  private query = `
    query($page: Int){
      Page(page: $page){
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
  private async getAlData(mPage, mIndex) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: this.query,
        variables: { page: mPage },
      }),
    };

    const response = await fetch(this.url, options);
    const body = await response.json();

    return body.data.Page.media[mIndex];
  }

  private async getRandomFromAL() {
    const pageCount = await this.getPageCountAL();
    const randPage = Math.floor(Math.random() * pageCount);
    const randIndex = Math.floor(Math.random() * 50);

    const manga = await this.getAlData(randPage, randIndex);
    return manga;
  }

  public async GenerateManga() {
    try {
      let found = false;
      let manga;
      while (!found) {
        manga = await this.getRandomFromAL();
        if (manga.bannerImage != null) {
          found = true;
        }
      }
      const localManga = await this.mangaModel.findOne({ al_id: manga.id });
      const mangaRecord = await this.dailyMangaModel.create({
        manga: localManga._id,
        date: new Date().toISOString().split('T')[0],
      });

      this.logger.silly(`Generated random manga with Al ID: ${manga.id} and local: ${localManga._id}`);
    } catch (e) {
      throw e;
    }
  }
}
