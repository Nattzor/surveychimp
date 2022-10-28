
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    if(!process.env.DATABASE_URL) {
        throw "500";
    }
    return mongoose.connect(process.env.DATABASE_URL);
}