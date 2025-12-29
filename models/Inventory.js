import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: "warehouse", required: true },
  quantity: { type: Number, default: 0 }
}, { timestamps: true });

const Inventory = mongoose.models.inventory || mongoose.model("inventory", InventorySchema);

export default Inventory;
