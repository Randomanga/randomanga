import {
  CreateDailyMangaDto,
  FindFilteredRequestDto,
  RequestLikeDto,
  RequestLikeStatusDto,
  ResponseLikeStatusDto,
} from './../../Core/Dtos/Manga/Manga.dtos';
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
      al_id: data.al_id,
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
  public static toLikeStatusRequestDto(data: RequestLikeStatusDto) {
    return {
      id: data.id,
      user: data.user,
    } as RequestLikeStatusDto;
  }
  public static toLikeStatusResponseDto(data: ResponseLikeStatusDto) {
    return {
      id: data.id,
      liked: data.liked,
    };
  }
  public static toFindFiltered(data: FindFilteredRequestDto) {
    return {
      includeFilters: data.includeFilters,
      excludeFilters: data.excludeFilters,
    } as FindFilteredRequestDto;
  }
  public static toCreateDailyMangaDto(data: CreateDailyMangaDto) {
    return {
      _id: data._id,
    } as CreateDailyMangaDto;
  }

  public static toWeb(data: IMangaModel) {
    return {
      title: data.title,
      al_id: data.al_id,
      cover_image: data.cover_image,
      banner: data.banner,
      description: data.description,
      genre: data.genre,
      tags: data.tags,
    } as IMangaModel;
  }

  public static manyToweb(data: IMangaModel[]) {
    return data.map((entry) => MangaMapper.toWeb(entry));
  }
}
