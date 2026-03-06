import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Mongoose is connected");
  } catch (error) {
    console.error("❌ Mongoose not connected");
    process.exit(1);
  }
};

export default connectDB;
