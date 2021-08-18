import { IAuthService } from 'Core/Ports/IAuth.service';
import { BaseHttpController } from 'Web/Lib/BaseHttp.controller';
import { Request, Response } from 'express';
import { UserMapper } from 'Config/Mappers/User.mapper';
import { IUserModel } from 'Data/Models/User.model';

export interface IAuthControllerOptions {
  authService: IAuthService;
}
export class AuthController extends BaseHttpController {
  private readonly _authService: IAuthService;
  constructor({ authService }: IAuthControllerOptions) {
    super();

    this._authService = authService;
  }
  createSession(req: Request, userID: string, rememberMe: boolean = false) {
    req.session.uid = userID;
    if (rememberMe) {
      //expire cookie after 30 days
      req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 30;
    }
  }

  async login(req: Request, res: Response) {
    const requestData = UserMapper.toLoginRequestDto(req.body);
    const user = await this._authService.login(requestData);
    this.createSession(req, user._id, requestData.rememberMe);
    this.toJson<IUserModel>(res, {
      statusCode: 200,
      data: user,
    });
  }
  async register(req: Request, res: Response) {
    const requestData = UserMapper.toCreateRequestDto(req.body);
    const user = await this._authService.register(requestData);
    this.createSession(req, user._id, true);
    this.toJson<IUserModel>(res, {
      statusCode: 201,
      data: user,
    });
  }
  async logout(req: Request, res: Response) {
    req.session.destroy(() => {});
    res.sendStatus(200);
  }
  async status(req: Request, res: Response) {
    //@ts-ignore
    const response = UserMapper.toWeb(req.user);
    this.toJson<IUserModel>(res, { statusCode: 200, data: response });
  }
}
