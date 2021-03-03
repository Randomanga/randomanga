export default class HttpException extends Error {
  constructor(public message: string) {
    super(message);
  }
}
