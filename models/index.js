// models/index.js
const Product = require('./Product');
const Inventory = require('./Inventory');
const Warehouse = require('./Warehouse');
const Supplier = require('./Supplier');
const Threshold = require('./Threshold');
const Sale = require('./Sale');

module.exports = {
  Product,
  Inventory,
  Warehouse,
  Supplier,
  Threshold,
  Sale
};