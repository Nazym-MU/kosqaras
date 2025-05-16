import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable.');
}

interface GlobalWithMongoose {
  mongoose?: {
    conn?: typeof mongoose;
    promise?: Promise<typeof mongoose>;
  };
}

let cached = (global as unknown as GlobalWithMongoose).mongoose || { conn: undefined, promise: undefined };

if (!cached) {
  cached = { conn: undefined, promise: undefined };
  (global as unknown as GlobalWithMongoose).mongoose = cached;
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    }
    catch (err) {
        cached.promise = undefined;
        throw err;
    }
}

export default connectDB;