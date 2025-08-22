import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  number: String,
  serviceType: String,
  budget: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Contact", contactSchema);
