const { User, ContactInfo, Order, Product } = require("./../models");
const chalk = require("chalk");

class UserController {
  async createUser(req, res) {
    try {
      const { firstName, lastName, email, address, city, country } = req.body;
      const user = await User.create({ firstName, lastName, email });
      const contInfo = await ContactInfo.create({
        address,
        city,
        country,
        userId: user.id,
      });
      res.json({ user, contInfo });
    } catch (error) {
      console.log(error);
      res.status(404).json({ mes: error.message });
    }
  }
  async findUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        include: [{ model: ContactInfo }, { model: Order }],
      });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(404).json({ mes: error.message });
    }
  }
  async findAllUsers(req, res) {
    try {
      console.log(chalk.blue("obect"));
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(404).json({ mes: error.message });
    }
  }
  async getUserByCity(req, res) {
    try {
      const { city } = req.query;
      console.log(chalk.blue(city));
      const users = await ContactInfo.findAll({
        attributes: ["User.*"],
        where: { city },
        include: [{ model: User }],
      });
      console.log(
        users.forEach((item) => {
          console.log(item);
        })
      );
      res.json(users);
    } catch (error) {
      res.status(404).json({ mes: error.message });
    }
  }
  async getAllOrders(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      const orders = await user.getOrders({
        include: [{ model: Product }],
      });
      res.json(orders);
    } catch (error) {
      res.status(404).json({ mes: error.message });
    }
  }
}
module.exports = new UserController();
