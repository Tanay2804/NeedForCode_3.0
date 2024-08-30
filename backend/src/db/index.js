import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}${process.env.DB_NAME}`,
            // FOR LOCAL DB YOU MAY NEED A / after URI
        );
        console.log(
            `\nMongoDB Connected DB Host: ${connectionInstance.connection.host}`,
        );
    } catch (error) {
        console.log("Mongo Connection FAILED\n\n", error);
        // process.exit(1);
    }
};

export default connectDB;
