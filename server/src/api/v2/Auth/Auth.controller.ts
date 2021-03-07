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
    const result = await this.authService.register(req.body);
    res.status(201).json(result);
  }
  async login(req: Request, res: Response) {
    const result = await this.authService.login(req.body);
    res.status(200).json(result);
  }
  async me(req: Request, res: Response) {
    // const result = await this.authService.me()
  }
}
