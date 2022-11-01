
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
<<<<<<< HEAD
    if(!process.env.DATABASE_URL) {
        throw "500";
=======
    console.log('DATABASE_URL', process.env.DATABASE_URL)
    if (!process.env.DATABASE_URL) {
        throw "400";
>>>>>>> development
    }
    return mongoose.connect(process.env.DATABASE_URL);
}