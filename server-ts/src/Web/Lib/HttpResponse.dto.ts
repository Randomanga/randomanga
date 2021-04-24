export class HttpResponseDto<T> {
  public statusCode: number
  public error: string | null
  public data: T
}
