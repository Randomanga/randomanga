import { RequestLikeDto } from './../../Core/Dtos/Manga/Manga.dtos';
import { IMangaModel } from 'Data/Models/Manga.model';
import { RequestDailyDto, ResponseDailyDto } from 'Core/Dtos/Manga/Manga.dtos';

export class MangaMapper {
  public static toDailyRequestDto(data: RequestDailyDto) {
    return {
      user: data.user,
    } as RequestDailyDto;
  }
  public static toDailyResponseDto(data: ResponseDailyDto) {
    return {
      title: data.title,
      description: data.description,
      cover_image: data.cover_image,
      banner: data.banner,
      genre: data.genre,
      tags: data.tags,
      liked: data.liked,
      likes_count: data.likes_count,
    } as ResponseDailyDto;
  }
  public static toLikeRequestDto(data: RequestLikeDto) {
    return {
      status: data.status,
      user: data.user,
      id: data.id,
    } as RequestLikeDto;
  }
}
