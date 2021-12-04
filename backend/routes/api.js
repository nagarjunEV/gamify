var express = require("express");
var authRouter = require("./auth");
var locationRouter = require("./location");

var app = express();

app.use("/auth/", authRouter);
app.use("/location/", locationRouter);

module.exports = app;
