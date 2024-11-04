// const { default: mongoose, Schema } = require("mongoose");
import mongoose from "mongoose";
const { Schema } = "mongoose";

const userSchema = new Schema(
  {
    fullname: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    provider: { type: String },
    profileImg: { type: String },
    role: { type: String, default: "user" },
    gender: { type: String },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);

export const userModal =
  mongoose.models.user || mongoose.model("user", userSchema);
