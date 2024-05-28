import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
    try {
        if (!config.databaseUri) {
            throw new Error("Database URI is not defined");
        }
        // register both listeners first then connect 
        mongoose.connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });
        mongoose.connection.on("error", (error) => {
            console.error(`Error in connecting db: ${error.message}`);
            process.exit(1);
        });

        await mongoose.connect(config.databaseUri);


    } catch (error: any) { // Add type assertion to specify the type of 'error' as 'Error'
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};

export default connectDB;