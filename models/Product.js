import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "company", required: true },
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  price: { type: mongoose.Schema.Types.Decimal128 },
  lowStockThreshold: { type: Number, default: 10 },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "supplier" }
}, { timestamps: true });

const Product = mongoose.models.product || mongoose.model("product", ProductSchema);

export default Product;
