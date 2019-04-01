const db = require("../data/config");
const bcrypt = require("bcryptjs");

async function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    try {
      const user = await db("users")
        .where({ username })
        .first();
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: "Invalid credentials provided." });
        }
      } else {
        res.status(404).json({ message: "No user located." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong during authentication." });
    }
  } else {
    res.status(401).json({ message: "Please provide credentials." });
  }
}

module.exports = restricted;
