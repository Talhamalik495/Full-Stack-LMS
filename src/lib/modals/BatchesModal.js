import mongoose from "mongoose";
const { Schema } = mongoose;

const batchesSchema = new Schema({
  title: { type: String, unique: true },
  description: { type: String },
  course: { type: mongoose.Types.ObjectId, ref: "Course" },
});
export let batchesesModal =
  mongoose.models.Batches || mongoose.model("Batches", batchesSchema);
