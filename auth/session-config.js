const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const crypto = require("crypto");

const knexDBConfig = require("../data/config");

const sessionConfig = {
  name: "user-session",
  secret: crypto.randomBytes(48, (err, buffer) => {
    const token = buffer.toString("hex");
    console.log(token);
  }),
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
