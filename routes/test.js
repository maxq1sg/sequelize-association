const { Router } = require("express");
const { User, ContactInfo } = require("./../models");
const router = Router();
const { Op } = require("sequelize");
const { sequelize } = require("./../models");
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, address, city, country } = req.body;
    const user = await User.create({ firstName, lastName, email });
    console.log(JSON.stringify(user));
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
});

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        id: {
          [Op.lte]: 5,
        },
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mes: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: [{ model: ContactInfo }],
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mes: error.message });
  }
});
module.exports = router;
