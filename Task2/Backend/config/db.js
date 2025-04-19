import mongoose from "mongoose";

const connectDB = async () => {
  try {

    const MONGO_URI = "mongodb+srv://vishalsinghaniya570046:npfpcB2Q9A6KevLg@cluster0.jporatv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    await mongoose.connect(MONGO_URI, {
      dbName: 'neuro-quiz'
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB conncetion failed", err.message);
  }
};


export default connectDB
