import mongoose from 'mongoose';

//  Local db connection

export const dbConnect = async () => {
    try {
        const con = await mongoose.connect('mongodb://localhost:27017/scheduler');
        console.log(`Database connected: ${con.connection.host}`)
    } catch (err) {
        console.log(err);
    }
}