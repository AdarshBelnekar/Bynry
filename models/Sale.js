import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: "warehouse", required: true },
  quantitySold: { type: Number, required: true },
  soldAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Sale = mongoose.models.sale || mongoose.model("sale", SaleSchema);

export default Sale;
