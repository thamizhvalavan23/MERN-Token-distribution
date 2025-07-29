import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://thamizhvalavan21:55555valavan@cluster0.6dvuy.mongodb.net/agent-task-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    process.exit(1); // Optional: exit process if connection fails
  }
};

export default connectionDB;
