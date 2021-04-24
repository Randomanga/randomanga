import mongoose, { Schema, Document } from 'mongoose'

export interface ISubscribersModel {
  _id: string
  name: string
  subscribedToChannel: string
  createdAt: Date
}

const SubscribersModel: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model<ISubscribersModel & Document>(
  'Subscribers',
  SubscribersModel
)
