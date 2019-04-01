const express = require("express");
const helmet = require("helmet");

const restricted = require("./middleware/restricted");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const usersRouter = require("./routes/users");

const server = express();

//Middleware
server.use(express.json());
server.use(helmet());

//Routes Middleware
server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", restricted, usersRouter);

module.exports = server;
