import { IMangaRepository } from '../Repository/IMangaRepository';
import { UserDTO } from './../Auth/Auth.dtos';
import { IMangaService } from './IMangaService';

export class MangaService implements IMangaService {
  constructor(private readonly mangaRepo: IMangaRepository) {}
  async getDaily(currentUser: UserDTO) {
    const dailyManga = await this.mangaRepo.getRandomDaily(currentUser);
    return dailyManga;
  }
  async getRelated(al_id: Number) {
    const relations = await this.mangaRepo.getRelated(al_id);
    return relations;
  }
  async getManga(al_id: Number) {}
  async setLikeStatus(al_id: Number, status: boolean, currentUser: UserDTO) {
    if (status) await this.mangaRepo.likeManga(al_id, currentUser._id);
    else await this.mangaRepo.unlikeManga(al_id, currentUser._id);
  }
  async getLikeStatus(al_id: Number, user: UserDTO) {
    const status = await this.mangaRepo.getLikeStatus(al_id, user._id);
    return {
      al_id,
      status,
    };
  }
}
