import { MangaController } from './Manga.controller';
import { MangaService } from './Manga.service';
import { MangaRepository } from './../Repository/Manga.repository';
import MangaModel from '../../../models/manga';
import DailyModel from '../../../models/daily-manga';

export const mangaRepository = new MangaRepository(MangaModel, DailyModel);
export const mangaService = new MangaService(mangaRepository);
export const mangaController = new MangaController(mangaService);

export default mangaController;
