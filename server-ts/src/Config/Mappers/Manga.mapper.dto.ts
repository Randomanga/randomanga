import { RequestDailyDto } from 'Core/Dtos/Manga/Manga.dtos';

export class MangaMapper {
  public static toDailyRequestDto(data: RequestDailyDto) {
    return {
      user: data.user,
    } as RequestDailyDto;
  }
}
