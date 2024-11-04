import mongoose from "mongoose";

export async function dbConnect() {
  let connected = false;
  if (connected) return "db allready connected";
  let connect = mongoose.connect(process.env.MONGODB_URI);
  if (connect.connection.redadyState == 1) {
    return (connected = true);
  }
  console.log("db connect");
}
