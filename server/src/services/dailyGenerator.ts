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
  private async getAlData(mIndex) {
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
    const body = await response.json();

    return body.data.Page.media[0];
  }

  private async getRandomFromAL() {
    const pageCount = await this.getPageCountAL();
    const randIndex = Math.floor(Math.random() * pageCount);

    const manga = await this.getAlData(randIndex);
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
        } else {
          this.logger.silly('Daily Gen: Banner not found, regenerating manga');
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
