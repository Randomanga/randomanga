import { IMangaModel } from 'Data/Models/Manga.model';
import { MangaMapper } from './../../../Config/Mappers/Manga.mapper.dto';
import { BaseHttpController } from './../../Lib/BaseHttp.controller';
import { IMangaService } from 'Core/Ports/IManga.service';
import { Request, Response } from 'express';
import { ResponseDailyDto } from 'Core/Dtos/Manga/Manga.dtos';

export interface IMangaControllerOptions {
  mangaService: IMangaService;
}
export class MangaController extends BaseHttpController {
  private readonly _mangaServicce: IMangaService;
  constructor({ mangaService }: IMangaControllerOptions) {
    super();

    this._mangaServicce = mangaService;
  }

  async daily(req: Request, res: Response) {
    const requestData = MangaMapper.toDailyRequestDto(req.body);
    const daily = await this._mangaServicce.getDaily(requestData);
    this.toJson<ResponseDailyDto>(res, { statusCode: 200, data: daily });
  }
  async find(req: Request, res: Response) {
    const manga = await this._mangaServicce.find(req.params.id);
    this.toJson<IMangaModel>(res, { data: manga });
  }
}
