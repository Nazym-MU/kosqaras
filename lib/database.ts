import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable.');
}

interface GlobalWithMongoose extends Record<string, any> {
  mongoose?: any;
}

let cached = (global as GlobalWithMongoose).mongoose;

if (!cached) {
  cached = mongoose;
  (global as GlobalWithMongoose).mongoose = cached;
}

async function connectDB() {
    if (cached.conn) {
        return  cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = cached.connect(MONGODB_URI, opts).then((mongoose: typeof import("mongoose")) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    }
    catch (err) {
        cached.promise = null;
        throw err;
    }
}

export default connectDB;