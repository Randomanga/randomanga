import { IMangaModel } from 'Data/Models/Manga.model';

export interface IArrayRandomizer {
  randomize<T>(list: T[]): Promise<{ list: T[]; seed: string }>;
}
