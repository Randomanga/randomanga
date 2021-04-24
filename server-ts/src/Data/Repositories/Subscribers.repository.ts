import SubscribersModel, {
  ISubscribersModel,
} from 'Data/Models/Subscribers.model'
import { ISubscribersRepository } from 'Core/Ports/ISubscribers.repository'
import { UpdateSubscriberDto } from 'Core/Dtos/Subscribers/UpdateSubscriberDto'

export class SubscribersRepository implements ISubscribersRepository {
  private _model = SubscribersModel

  public async getAllSubscribers() {
    return this._model.find({})
  }

  public async findOneSubscriber(id: string) {
    return SubscribersModel.findById(id)
  }

  public async save(data: Omit<ISubscribersModel, '_id'>) {
    const subscriber = new this._model(data)
    return subscriber.save()
  }

  async updateSubscriber({ _id, ...data }: UpdateSubscriberDto) {
    await this._model.updateOne({ _id }, data)
    return this.findOneSubscriber(_id)
  }

  public async delete(id: string) {
    const { deletedCount } = await this._model.deleteOne({ _id: id })
    return deletedCount ? deletedCount >= 1 : false
  }
}
