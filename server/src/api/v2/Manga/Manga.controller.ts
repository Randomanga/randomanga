import { Request, Response } from 'express';
import { BaseHttpController } from './../Lib/BaseHttpController';
import { IMangaService } from './IMangaService';
export class MangaController extends BaseHttpController {
  constructor(private readonly mangaService: IMangaService) {
    super();
  }
  async daily(req: Request, res: Response) {
    const dailyManga = await this.mangaService.getDaily(req.currentUser);
    res.json({ dailyManga }).status(200);
  }
  async related(req: Request, res: Response) {
    const al_id = Number(req.params.al_id);
    const manga = await this.mangaService.getRelated(al_id);
    res.json({ manga }).status(200);
  }
  async like(req: Request, res: Response) {
    const al_id = Number(req.params.al_id);
    await this.mangaService.setLikeStatus(al_id, true, req.currentUser);
    res.sendStatus(200);
  }
  async unlike(req: Request, res: Response) {
    const al_id = Number(req.params.al_id);
    await this.mangaService.setLikeStatus(al_id, false, req.currentUser);
    res.sendStatus(200);
  }
  async likeStatus(req: Request, res: Response) {
    const al_id = Number(req.params.al_id);
    const manga = await this.mangaService.getLikeStatus(al_id, req.currentUser);
    res.json({ manga }).status(200);
  }
}
