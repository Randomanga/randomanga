import { RandomListMapper } from 'Config/Mappers/RandomList.mapper.dto';
import {
  CreateListResponseDto,
  FindListResponseDto,
} from 'Core/Dtos/RandomList/RandomList.dtos';
import { IRandomListService } from 'Core/Ports/IRandomLists.service';
import { NextFunction, Request, Response } from 'express';
import { BaseHttpController } from 'Web/Lib/BaseHttp.controller';

export interface RandomListControllerOptions {
  randomListService: IRandomListService;
}

export  class RandomListController extends BaseHttpController {
  private readonly _listService: IRandomListService;
  constructor({ randomListService }: RandomListControllerOptions) {
    super();

    this._listService = randomListService;
  }
  async create(req: Request, res: Response, next: NextFunction) {
    const payload = RandomListMapper.toCreateRequestDto(req.body);
    const data = await this._listService.create(payload);
    this.toJson<CreateListResponseDto>(res, {
      data,
    });
  }
  async find(req: Request, res: Response, next: NextFunction) {
    const payload = RandomListMapper.toFindRequestDto({
      id: req.params.id,
      page: Number(req.params.page),
    });
    const data = await this._listService.find(payload);
    this.toJson<FindListResponseDto>(res, { data });
  }
}
