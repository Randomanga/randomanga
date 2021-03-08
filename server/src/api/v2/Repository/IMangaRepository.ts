import { UserDTO } from './../Auth/Auth.dtos';
export interface IMangaRepository {
  getRandomDaily(user: UserDTO): Promise<any>;
  findByAlId(al_id: Number): Promise<any>;
  likeManga(al_id: Number, userID: UserDTO['_id']): Promise<void>;
  getLikeStatus(al_id: Number, userID: UserDTO['_id']): Promise<boolean>;
  unlikeManga(al_id: Number, userID: UserDTO['_id']): Promise<void>;
  getRelated(al_id: Number): Promise<any>;
}
