import mongoose from "mongoose";

const WarehouseSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "company", required: true },
  name: { type: String, required: true }
}, { timestamps: true });

const Warehouse = mongoose.models.warehouse || mongoose.model("warehouse", WarehouseSchema);

export default Warehouse;
