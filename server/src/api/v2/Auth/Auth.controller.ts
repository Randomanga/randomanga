import { Request, Response } from 'express';
import { BaseHttpController } from '../Lib/BaseHttpController';
import { IAuthService } from './IAuthService';

export class AuthController extends BaseHttpController {
  // Notice how we are making use of an interface!
  constructor(private readonly authService: IAuthService) {
    super();
  }

  async store(req: Request, res: Response) {
    // You should look into Request & Response Dto mapping.
    // The controller *should* give the service a mapped dto.
    const result = await this.authService.register(req.body);
    // The service will give us a mapped DTO back
    // If it fails, then the CatchExceptions will make sure we can handle it
    // in our custom error handlers.

    // Return the mapped dto from authService
    // I recommend adding another DTO for the actual response.
    res.status(201).json(result);
  }

  async me(req: Request, res: Response) {
    // const result = await this.authService.me()
  }
}
