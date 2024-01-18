const USER = require("../Model/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../utils/auth");

async function handleCreateNewUser(req, res) {
  if (!req.body) return res.render("signup");
  await USER.create({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  }).then((url) => {
    if (url) {
      console.log("User created succesfully");
      return res.render("login");
    } else {
      console.log("user not able to created. ");
      return res.render("signup");
    }
  });
}
async function handleLoginUser(req, res) {
  await USER.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((url) => {
    if (url) {
      console.log("User found");
      const sessionId = uuidv4();
      setUser(sessionId, USER);
      res.cookie("uid", sessionId);

      return res.render("home");
    } else {
      console.log("user not found");
      return res.render("login");
    }
  });
}

module.exports = {
  handleCreateNewUser,
  handleLoginUser,
};
