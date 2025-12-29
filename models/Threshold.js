import mongoose from "mongoose";


const ThresholdSchema = new mongoose.Schema({
  companyId: { type: mongoose.Types.ObjectId, ref: 'Company', required: true, index: true },
  scope: { type: String, enum: ['productType', 'product'], required: true },
  productType: { type: String }, // when scope=productType
  productId: { type: mongoose.Types.ObjectId, ref: 'Product' }, // when scope=product
  threshold: { type: Number, required: true, min: 0 }
}, { timestamps: true });
ThresholdSchema.index({ companyId: 1, productType: 1 });
ThresholdSchema.index({ companyId: 1, productId: 1 });


const  Threshold =mongoose.models.threshold|| mongoose.model("threshold", ThresholdSchema)

export default Threshold;