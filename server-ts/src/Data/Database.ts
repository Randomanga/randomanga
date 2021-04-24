import mongoose from 'mongoose'

export class Database {
  static async connect(uri: string = process.env.DB_URI as string) {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('💹 connected to MongoDB')
  }
}
