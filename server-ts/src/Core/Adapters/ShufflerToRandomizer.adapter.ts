import { IMangaModel } from 'Data/Models/Manga.model';
import { shuffle } from 'seededshuffle';
import crypto from 'crypto';
import { IArrayRandomizer } from './IRandomizer';

export class Randomizer implements IArrayRandomizer {
  private generateSeed() {
    return crypto.randomBytes(8).toString('hex');
  }
  async randomize<T>(arr: T[]) {
    const seed = this.generateSeed();
    const list = shuffle(arr, seed, true);
    return {
      list,
      seed,
    };
  }
}
