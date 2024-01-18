const express = require("express");
const Router = express();
const {
  handleGenrateNewShortURL,
  handleGetToRedirectURL,
} = require("../Controller/url");

Router.post("/", handleGenrateNewShortURL);
Router.get("/:shortid", handleGetToRedirectURL);

module.exports = Router;
