import { Response } from 'express';
import { HttpResponseDto } from './HttpResponse.dto';

export class BaseHttpController {
  constructor() {
    this.autoBindMethods();
  }

  protected toJson<T>(
    res: Response,
    { statusCode = 200, error = null, data }: Partial<HttpResponseDto<T>>
  ) {
    return res.status(statusCode).json({
      error,
      ...data,
    } as HttpResponseDto<T>);
  }

  private autoBindMethods() {
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

    methods
      .filter((method) => method !== 'constructor')
      // @ts-expect-error
      .forEach((method) => (this[method] = this[method].bind(this)));
  }
}
