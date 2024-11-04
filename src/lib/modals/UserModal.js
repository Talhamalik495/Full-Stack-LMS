// const { default: mongoose, Schema } = require("mongoose");
import mongoose from "mongoose";
const { Schema } = "mongoose";

const userSchema = new Schema(
  {
    fullname: { type: "string" },
    email: { type: "string", required: true },
    password: { type: "string" },
    provider: { type: "string" },
    profileImg: { type: "string" },
    role: { type: "string", default: "user" },
    gender: { type: "string" },
    address: { type: "string" },
  },
  {
    timestamps: true,
  }
);

export const userModal =
  mongoose.models.user || mongoose.model("user", userSchema);
