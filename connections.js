import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTALS", // 👈 tumne spelling galat likha hai "PORTALSS"
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ Connected to database.");
    })
    .catch((err) => {
        console.log(`❌ Some error occurred while connecting to database: ${err}`);
    });
};
