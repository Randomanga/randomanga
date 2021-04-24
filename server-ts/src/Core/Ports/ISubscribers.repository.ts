import { CreateSubscribersRequestDto } from 'Core/Dtos/Subscribers/CreateSubscribers.dto'
import { UpdateSubscriberDto } from 'Core/Dtos/Subscribers/UpdateSubscriberDto'
import { ISubscribersModel } from 'Data/Models/Subscribers.model'

export interface ISubscribersRepository {
  getAllSubscribers(): Promise<ISubscribersModel[]>
  findOneSubscriber(id: string): Promise<ISubscribersModel | null>
  updateSubscriber(data: UpdateSubscriberDto): Promise<ISubscribersModel | null>
  save(data: CreateSubscribersRequestDto): Promise<ISubscribersModel>
  delete(id: string): Promise<boolean>
}
