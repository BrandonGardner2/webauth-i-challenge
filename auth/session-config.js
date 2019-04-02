const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const knexDBConfig = require("../data/config");

const sessionConfig = {
  name: "user-session",
  secret:
    "ec2c11a6b3f4bad26353cc1f33036e9719bf2b3c687c45bfe19febc6e43060d2b681ecc1395ffb1f457b179859a53d36",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 15,
    secure: false,
    httpOnly: true
  },
  store: new KnexSessionStore({
    knex: knexDBConfig,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 30
  })
};

module.exports = session(sessionConfig);
