import {
  CreateSubscribersRequestDto,
  CreateSubscribersResponseDto,
} from 'Core/Dtos/Subscribers/CreateSubscribers.dto'
import { UpdateSubscriberDto } from 'Core/Dtos/Subscribers/UpdateSubscriberDto'
import { ISubscribersModel } from 'Data/Models/Subscribers.model'

export interface ISubscribersService {
  getAllSubscribers(): Promise<ISubscribersModel[]>
  getOneSubscriber(id: string): Promise<ISubscribersModel | null>
  createSubscriber(
    data: CreateSubscribersRequestDto
  ): Promise<CreateSubscribersResponseDto>
  updateSubscriber(data: UpdateSubscriberDto): Promise<ISubscribersModel | null>
  deleteSubscriber(id: string): Promise<boolean>
}
