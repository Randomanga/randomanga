import { LoginRequestDTO } from './Auth.dtos';
import { Request, Response } from 'express';
import { BaseHttpController } from '../Lib/BaseHttpController';
import { IAuthService } from './IAuthService';

export class AuthController extends BaseHttpController {
  // Notice how we are making use of an interface!
  constructor(private readonly authService: IAuthService) {
    super();
  }

  async register(req: Request, res: Response) {
    const user = await this.authService.register(req.body);
    req.session.uid = user._id;
    res.status(201).json({ ...user });
  }
  async login(req: Request, res: Response) {
    const user = await this.authService.login(req.body);
    req.session.uid = user._id;
    res.status(200).json({ ...user });
  }
  async me(req: Request, res: Response) {
    // const result = await this.authService.me()
  }
}
