import { IAuthService } from 'Core/Ports/IAuth.service';
import { BaseHttpController } from 'Web/Lib/BaseHttp.controller';
import { Request, Response } from 'express';
import { UserMapper } from 'Config/Mappers/User.mapper';
import { IUserModel } from 'Data/Models/User.model';
import { RESOLVER } from 'awilix';

export interface IAuthControllerOptions {
  authService: IAuthService;
}
export class AuthController extends BaseHttpController {
  private readonly _authService: IAuthService;
  constructor({ authService }: IAuthControllerOptions) {
    super();

    this._authService = authService;
  }
  createSession(req: Request, userID: string) {
    req.session.uid = userID;
  }

  async login(req: Request, res: Response) {
    const requestData = UserMapper.toLoginRequestDto(req.body);
    const user = await this._authService.login(requestData);
    this.createSession(req, user._id);
    this.toJson<IUserModel>(res, {
      statusCode: 200,
      data: user,
    });
  }
  async register(req: Request, res: Response) {
    const requestData = UserMapper.toCreateRequestDto(req.body);
    const user = await this._authService.register(requestData);
    this.createSession(req, user._id);
    this.toJson<IUserModel>(res, {
      statusCode: 201,
      data: user,
    });
  }
}
