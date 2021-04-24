import {
  CreateSubscribersRequestDto,
  CreateSubscribersResponseDto,
} from 'Core/Dtos/Subscribers/CreateSubscribers.dto'
import { UpdateSubscriberDto } from 'Core/Dtos/Subscribers/UpdateSubscriberDto'
import { ISubscribersModel } from 'Data/Models/Subscribers.model'

export class SubscribersMapper {
  public static toCreateRequestDto(data: CreateSubscribersRequestDto) {
    return {
      name: data.name,
      subscribedToChannel: data.subscribedToChannel,
    } as CreateSubscribersRequestDto
  }

  public static toCreateResponseDto(data: CreateSubscribersResponseDto) {
    return {
      _id: data._id,
      name: data.name,
      subscribedToChannel: data.subscribedToChannel,
      createdAt: data.createdAt,
    } as CreateSubscribersResponseDto
  }

  public static toUpdateRequestDto(data: UpdateSubscriberDto) {
    return {
      _id: data._id,
      name: data.name,
      subscribedToChannel: data.subscribedToChannel,
    } as UpdateSubscriberDto
  }

  /**
   * A generic response
   */
  public static toWeb(data: ISubscribersModel) {
    return {
      _id: data._id,
      name: data.name,
      subscribedToChannel: data.subscribedToChannel,
      createdAt: data.createdAt,
    } as ISubscribersModel
  }

  public static manyToweb(data: ISubscribersModel[]) {
    return data.map((entry) => SubscribersMapper.toWeb(entry))
  }
}
