const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

const UsersController = {
  getAll: async (req, res, next) => {
    try {
      const users = await prisma.user.findMany({
        where: {
          isVerified: true,
        },
        // include: {
        //   bookmarks: true,
        // },
        select: {
          id: true,
          firstName: true,
          bookmarks: {
            select: {
              id: true,
              url: true,
            },
          },
        },
      });
      res.json(users);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  create: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          firstName: "John",
          lastName: "Doe",
        },
      });

      res.json(newUser);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  login: (req, res, next) => {
    jwt.sign(
      {},
      "6dcbec046700153b8f5d87c940245f25061c09b9a0d682e6dad2f471ef3afc1f2575be811db5597fa0ed1d00df7658240f64e5f95195e8fb74affd9a0f5c24f2"
    );
  },
};

module.exports = UsersController;
