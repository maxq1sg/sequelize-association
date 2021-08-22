const { User, ContactInfo, Product, Order } = require("./../models");
const chalk = require("chalk");

class OrderController {
  async createOrder(req, res) {
    try {
      const { payment_method, is_paid, product_name, user_id } = req.body;
      console.log(chalk.redBright(JSON.stringify(product_name)));
      const user = await User.findByPk(user_id);
      const order = await Order.create({
        payment_method,
        is_paid,
        user_id: user.id,
      });
      const products = await Product.findAll({
        where: {
          name: product_name,
        },
      });
      await order.addProducts(products);

      res.json(await order.getProducts());
    } catch (error) {
      console.log(error);
      res.status(404).json({ mes: error.message });
    }
  }
}
module.exports = new OrderController();
