import { IMangaModel } from 'Data/Models/Manga.model';
import { MangaMapper } from '../../../Config/Mappers/Manga.mapper.dto';
import { BaseHttpController } from './../../Lib/BaseHttp.controller';
import { IMangaService } from 'Core/Ports/IManga.service';
import { Request, Response } from 'express';
import {
  ResponseDailyDto,
  ResponseLikeStatusDto,
  ResponseRelatedDto,
} from 'Core/Dtos/Manga/Manga.dtos';

export interface IMangaControllerOptions {
  mangaService: IMangaService;
}
export class MangaController extends BaseHttpController {
  private readonly _mangaService: IMangaService;
  constructor({ mangaService }: IMangaControllerOptions) {
    super();

    this._mangaService = mangaService;
  }

  async daily(req: Request, res: Response) {
    const requestData = MangaMapper.toDailyRequestDto(req);
    const daily = await this._mangaService.getDaily(requestData);
    const manga = MangaMapper.toDailyResponseDto(daily);
    this.toJson<{ manga: ResponseDailyDto }>(res, {
      statusCode: 200,
      data: { manga: manga },
    });
  }
  async find(req: Request, res: Response) {
    const manga = await this._mangaService.find(req.params.id);
    this.toJson<IMangaModel>(res, { data: manga });
  }
  async like(req: Request, res: Response) {
    const data = MangaMapper.toLikeRequestDto({
      status: true,
      id: Number(req.params.id),
      user: req.user!,
    });
    await this._mangaService.setLikeStatus(data);
    res.sendStatus(200);
  }
  async unlike(req: Request, res: Response) {
    const data = MangaMapper.toLikeRequestDto({
      status: false,
      id: Number(req.params.id),
      user: req.user!,
    });
    await this._mangaService.setLikeStatus(data);
    res.sendStatus(200);
  }
  async likeStatus(req: Request, res: Response) {
    const data = MangaMapper.toLikeStatusRequestDto({
      id: req.params.id,
      user: req.user!,
    });
    const status = await this._mangaService.getLikeStatus(data);
    this.toJson<ResponseLikeStatusDto>(res, {
      statusCode: 200,
      data: {
        id: req.params.id,
        liked: status,
      },
    });
  }
  async related(req: Request, res: Response) {
    const relatedList = await this._mangaService.getRelated(req.params.id);
    this.toJson<ResponseRelatedDto>(res, {
      data: {
        id: req.params.id,
        related: relatedList,
      },
    });
  }
}
