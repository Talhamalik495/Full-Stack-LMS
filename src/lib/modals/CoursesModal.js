import mongoose from "mongoose";
const { Schema } = "mongoose";
let courseSchema = new Schema(
  {
    title: { type: "String", unique: "true" },
    description: { type: "String" },
    duration: { type: "String" },
    eligibility: [String],
  },
  {
    timestamps: true,
  }
);
export let coursesSchema =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
