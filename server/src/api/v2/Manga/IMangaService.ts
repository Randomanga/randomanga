import { UserDTO } from './../Auth/Auth.dtos';
export interface IMangaService {
  getDaily(currentUser: UserDTO): Promise<any>;
  getRelated(al_id: Number): Promise<any>;
  getManga(al_id: Number): Promise<any>;
  setLikeStatus(al_id: Number, status: boolean, currentUser: UserDTO): Promise<void>;
  getLikeStatus(al_id: Number, user: UserDTO): Promise<any>;
}
