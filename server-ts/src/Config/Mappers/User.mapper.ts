import {
  CreateUserRequestDto,
  CreateUserResponseDto,
  LoginUserRequestDto,
  UpdateALTokenRequestDto,
} from 'Core/Dtos/User/User.dtos';
import { IUserModel } from 'Data/Models/User.model';

export class UserMapper {
  public static toCreateRequestDto(data: CreateUserRequestDto) {
    return {
      username: data.username,
      email: data.email,
      password: data.password,
    } as CreateUserRequestDto;
  }

  public static toCreateResponseDto(data: CreateUserResponseDto) {
    return {
      _id: data._id,
      username: data.username,
      createdAt: data.createdAt,
    } as CreateUserResponseDto;
  }

  public static toUpdateALTokenRequestDto(data: UpdateALTokenRequestDto) {
    return {
      code: data.code,
      user: data.user,
    } as UpdateALTokenRequestDto;
  }
  public static toLoginRequestDto(data: LoginUserRequestDto) {
    return {
      username: data.username,
      password: data.password,
    } as LoginUserRequestDto;
  }
  /**
   * A generic response
   */
  public static toWeb(data: IUserModel) {
    return {
      _id: data._id,
      username: data.username,
      avatar: data.avatar,
      createdAt: data.createdAt,
    } as IUserModel;
  }

  public static manyToweb(data: IUserModel[]) {
    return data.map((entry) => UserMapper.toWeb(entry));
  }
}
