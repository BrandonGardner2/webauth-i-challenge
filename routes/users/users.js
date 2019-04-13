const db = require("../../data/config");

module.exports = {
  getUsers
};

function getUsers() {
  return db("users");
}
