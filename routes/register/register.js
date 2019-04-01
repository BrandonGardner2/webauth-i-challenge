const bcrypt = require("bcryptjs");

const db = require("../../data/config");

module.exports = {
  addUser
};

async function addUser(username, password) {
  password = bcrypt.hashSync(password, 8);

  return db("users").insert({ username, password });
}
