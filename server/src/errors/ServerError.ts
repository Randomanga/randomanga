export default class ServerError extends Error {
  constructor(public message: string) {
    super(message);
  }
}
