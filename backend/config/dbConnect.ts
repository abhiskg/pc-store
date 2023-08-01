import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI as string, {
    dbName: "pc-builder",
  });
};

export default dbConnect;
