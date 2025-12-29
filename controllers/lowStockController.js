import Product from "../models/Product.js";
import Inventory from "../models/Inventory.js";
import Warehouse from "../models/Warehouse.js";
import Supplier from "../models/Supplier.js";

export const getLowStockAlerts = async (req, res) => {
  try {
    const { companyId } = req.params;

    // Validate ObjectId
    if (!companyId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid companyId" });
    }

    const products = await Product.find({ companyId });
    const alerts = [];

    for (const product of products) {
      const inventories = await Inventory.find({ productId: product._id });
      for (const inventory of inventories) {
        if (inventory.quantity < product.lowStockThreshold) {
          const warehouse = await Warehouse.findById(inventory.warehouseId);
          const supplier = product.supplierId
            ? await Supplier.findById(product.supplierId)
            : null;

          alerts.push({
            product_id: product._id,
            product_name: product.name,
            sku: product.sku,
            warehouse_id: warehouse?._id,
            warehouse_name: warehouse?.name,
            current_stock: inventory.quantity,
            threshold: product.lowStockThreshold,
            days_until_stockout: Math.ceil(inventory.quantity / 1), // example
            supplier: supplier
              ? {
                  id: supplier._id,
                  name: supplier.name,
                  contact_email: supplier.contactEmail
                }
              : null
          });
        }
      }
    }

    res.json({ alerts, total_alerts: alerts.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
