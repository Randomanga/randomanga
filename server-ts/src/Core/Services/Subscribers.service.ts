import { ISubscribersService } from 'Core/Ports/ISubscribers.service';
import { ISubscribersRepository } from 'Core/Ports/ISubscribers.repository';
import { CreateSubscribersRequestDto } from 'Core/Dtos/Subscribers/CreateSubscribers.dto';
import { UpdateSubscriberDto } from 'Core/Dtos/Subscribers/UpdateSubscriberDto';
import { SubscribersMapper } from 'Config/Mappers/Subscribers.mapper.dto';

export interface ISubscribersServiceOptions {
  subscribersRepository: ISubscribersRepository;
}
export class SubscribersService implements ISubscribersService {
  private readonly _subRepo: ISubscribersRepository;

  constructor({ subscribersRepository }: ISubscribersServiceOptions) {
    this._subRepo = subscribersRepository;
  }

  public async getAllSubscribers() {
    const subscribers = await this._subRepo.getAllSubscribers();
    return SubscribersMapper.manyToweb(subscribers);
  }

  public async getOneSubscriber(id: string) {
    const subscriber = await this._subRepo.findOneSubscriber(id);

    if (!subscriber) {
      throw new Error('Not found');
    }

    return SubscribersMapper.toWeb(subscriber);
  }

  public async createSubscriber(data: CreateSubscribersRequestDto) {
    const subscriber = await this._subRepo.save(data);
    return SubscribersMapper.toCreateResponseDto(subscriber);
  }

  public async updateSubscriber(data: UpdateSubscriberDto) {
    return this._subRepo.updateSubscriber(data);
  }

  public async deleteSubscriber(id: string) {
    return this._subRepo.delete(id);
  }
}
