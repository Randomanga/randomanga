import mongoose from 'mongoose';

export class Database {
  public static async connect(uri: string = process.env.DB_URI as string) {
    console.log(uri);
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
