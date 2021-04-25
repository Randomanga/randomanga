import { AuthResponseDto } from 'Core/Dtos/Auth/Auth.dto';
import { AuthMapper } from './../../../Config/Mappers/Auth.mapper';
import { IAuthService } from 'Core/Ports/IAuth.service';
import { BaseHttpController } from 'Web/Lib/BaseHttp.controller';
import { Request, Response } from 'express';

export interface IAuthControllerOptions {
  authService: IAuthService;
}
export class AuthController extends BaseHttpController {
  private readonly _authService: IAuthService;
  constructor({ authService }: IAuthControllerOptions) {
    super();

    this._authService = authService;
  }

  async login(req: Request, res: Response) {
    const requestData = AuthMapper.toLoginRequestDto(req.body);
    const user = await this._authService.login(requestData);
    req.session.uid = user._id;
    this.toJson<AuthResponseDto>(res, {
      statusCode: 200,
      data: user,
    });
  }
  async register(req: Request, res: Response) {
    const requestData = AuthMapper.toRegisterRequestDto(req.body);
    const user = await this._authService.register(requestData);
    req.session.uid = user._id;
    this.toJson<AuthResponseDto>(res, {
      statusCode: 201,
      data: user,
    });
  }
}
