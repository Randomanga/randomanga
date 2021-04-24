import { Request, Response } from 'express';
import { ISubscribersService } from 'Core/Ports/ISubscribers.service';
import { BaseHttpController } from 'Web/Lib/BaseHttp.controller';
import { ISubscribersModel } from 'Data/Models/Subscribers.model';
import { SubscribersMapper } from 'Config/Mappers/Subscribers.mapper.dto';

export interface ISubscribersControllerOptions {
  subscribersService: ISubscribersService;
}

export class SubscribersController extends BaseHttpController {
  private readonly _subscribersService: ISubscribersService;

  constructor({ subscribersService }: ISubscribersControllerOptions) {
    super();

    this._subscribersService = subscribersService;
  }

  async index(_: any, res: Response) {
    const subscribers = await this._subscribersService.getAllSubscribers();

    this.toJson<ISubscribersModel[]>(res, {
      data: subscribers,
    });
  }

  async show(req: Request, res: Response) {
    const subscriber = await this._subscribersService.getOneSubscriber(
      req.params.id
    );

    this.toJson<ISubscribersModel>(res, {
      data: subscriber!,
    });
  }

  async store(req: Request, res: Response) {
    const requestData = SubscribersMapper.toCreateRequestDto(req.body);
    const subscriber = await this._subscribersService.createSubscriber(
      requestData
    );

    this.toJson<ISubscribersModel>(res, {
      statusCode: 201,
      data: subscriber,
    });
  }

  async update(req: Request, res: Response) {
    const requestData = SubscribersMapper.toUpdateRequestDto({
      _id: req.params.id,
      ...req.body,
    });
    await this._subscribersService.updateSubscriber(requestData);

    res.sendStatus(204);
  }

  async destroy(req: Request, res: Response) {
    await this._subscribersService.deleteSubscriber(req.params.id);

    res.sendStatus(204);
  }
}
