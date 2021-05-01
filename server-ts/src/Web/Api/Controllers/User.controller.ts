import { UserMapper } from 'Config/Mappers/User.mapper';
import { IUserService } from 'Core/Ports/IUser.service';
import { BaseHttpController } from 'Web/Lib/BaseHttp.controller';
import { Request, Response } from 'express';
import { IdentityResponseDto } from 'Core/Dtos/User/User.dtos';

export interface IUserControllerOptions {
  userService: IUserService;
}
export class UserController extends BaseHttpController {
  private readonly _userService: IUserService;
  constructor({ userService }: IUserControllerOptions) {
    super();
    this._userService = userService;
  }
  async alIdentityToken(req: Request, res: Response) {
    const data = UserMapper.toCreateAlIdentityRequestDto({ user: req.user! });
    const identity = await this._userService.createAlIdentity(data);
    this.toJson<IdentityResponseDto>(res, { data: identity });
  }
  async authorizeAniList(req: Request, res: Response) {
    if (req.query.error) res.redirect('http://localhost:3000/');
    const data = UserMapper.toUpdateALTokenRequestDto({
      code: String(req.query.code),
      user: req.user!,
    });
    await this._userService.updateToken(data);
    res.redirect('http://192.168.1.242:3000/');
  }
  async test(req: Request, res: Response) {
    console.log(req.body);
    res.redirect('http://192.168.1.242:3000/');
  }
}
