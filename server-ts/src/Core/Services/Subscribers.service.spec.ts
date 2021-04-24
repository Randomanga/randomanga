import { SubscribersService } from 'Core/Services/Subscribers.service'
import { ISubscribersModel } from 'Data/Models/Subscribers.model'
import { CreateSubscribersRequestDto } from '../Dtos/Subscribers/CreateSubscribers.dto'
import { UpdateSubscriberDto } from '../Dtos/Subscribers/UpdateSubscriberDto'
import { ISubscribersRepository } from '../Ports/ISubscribers.repository'

/*
  Example test setup
*/

class MockedRepo implements ISubscribersRepository {
  async getAllSubscribers(): Promise<ISubscribersModel[]> {
    return []
  }
  findOneSubscriber(id: string): Promise<ISubscribersModel | null> {
    throw new Error('Method not implemented.')
  }
  updateSubscriber(
    data: UpdateSubscriberDto
  ): Promise<ISubscribersModel | null> {
    throw new Error('Method not implemented.')
  }
  save(data: CreateSubscribersRequestDto): Promise<ISubscribersModel> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}

const repo = new MockedRepo()
const service = new SubscribersService({ subscribersRepository: repo })

describe('Subscribers service', () => {
  it('Should return all the subcribers', async (done) => {
    const subscribers = await service.getAllSubscribers()
    expect(subscribers).toEqual([])
    done()
  })
})
