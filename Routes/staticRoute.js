const express = require("express");
const staticRouter = express.Router();
const URL = require("../Model/url");
staticRouter.get("/", async (req, res) => {
  let all = await URL.find({});
  res.render("home", { url: all });
});
staticRouter.get("/login", (req, res) => {
  res.render("login");
});
staticRouter.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = staticRouter;
