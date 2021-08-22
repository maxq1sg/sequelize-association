const { User, ContactInfo, Product, Order } = require("./../models");
const chalk = require("chalk");

class ProductController {
  async createProduct(req, res) {
    try {
      const { name, count_in_stock, price } = req.body;
      const product = await Product.create({ name, count_in_stock, price });

      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(404).json({ mes: error.message });
    }
  }
}
module.exports = new ProductController();
