// mongoose.js

import mongoose from "mongoose";

// MongoDB connection URL
const mongoURI = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
