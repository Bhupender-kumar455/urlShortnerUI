const express = require("express");
const Router = express();
const { handleCreateNewUser, handleLoginUser } = require("../Controller/user");
Router.post("/signup", handleCreateNewUser);
Router.post("/signin", handleLoginUser);

module.exports = Router;
