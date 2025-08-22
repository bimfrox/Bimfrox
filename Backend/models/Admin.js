import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String, // hashed
  otp: String,
  otpExpiry: Date
});

export default mongoose.model("admins", adminSchema);
