import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactEmail: { type: String }
}, { timestamps: true });

const Supplier = mongoose.models.supplier || mongoose.model("supplier", SupplierSchema);

export default Supplier;
