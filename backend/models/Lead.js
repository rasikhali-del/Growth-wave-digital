import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    company: { type: String, trim: true, default: "" },
    website: { type: String, trim: true, default: "" },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    country: { type: String, trim: true, default: "" },
    service: { type: String, trim: true, default: "" },
    budget: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, default: "" },
    source: { type: String, enum: ["contact", "audit", "workwithus"], default: "contact" },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
