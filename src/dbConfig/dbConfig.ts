import mongoose from "mongoose";

export async function connect() {
    try{
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB successfully connected");
        })
        connection.on("error", (error) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running.' + error);
        })
    } catch(error){
        console.log("Something got wrong!");
        console.log(error);
    }
}