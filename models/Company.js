import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true });

const Company = mongoose.models.company || mongoose.model("company", CompanySchema);

export default Company;
