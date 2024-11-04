import mongoose from "mongoose";
const { Schema } = "mongoose";
let courseSchema = new Schema({
  title: { type: "string", unique: "true" },
  description: { type: "string" },
  duration: { type: "string" },
  eligibility: [String],
},
{
    timestamps: true,
  
});
