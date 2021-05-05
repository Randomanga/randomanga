import mongoose from 'mongoose';
import mongodb from 'mongodb';

export class Database {
  public static async connect(uri: string = process.env.DB_URI as string) {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ignoreUndefined: true,
    });
    console.log('🔥 Connected to MongoDB');
  }
  public static getDb() {
    return mongoose.connection.db;
  }
}
