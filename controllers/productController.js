import Product from "../models/Product.js";
import Inventory from "../models/Inventory.js";

export const createProduct = async (req, res) => {
  try {
    const {
      companyId,
      name,
      sku,
      price,
      warehouseId,
      initialQuantity = 0,
      supplierId
    } = req.body;

    if (!name || !sku || !companyId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // SKU uniqueness check
    const existingSku = await Product.findOne({ sku });
    if (existingSku) {
      return res.status(409).json({ message: "SKU already exists" });
    }

    // Create product
    const product = await Product.create({
      companyId,
      name,
      sku,
      price,
      supplierId
    });

    // Inventory is warehouse-specific
    if (warehouseId) {
      await Inventory.create({
        productId: product._id,
        warehouseId,
        quantity: initialQuantity
      });
    }

    res.status(201).json({
      message: "Product created successfully",
      product_id: product._id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Product creation failed" });
  }
};
