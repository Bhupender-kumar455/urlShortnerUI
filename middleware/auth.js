const uuid = require("uuid");
const { getUser } = require("../utils/auth");
async function restrictToOnlyAuthUser(req, res, next) {
  const userId = req.cookies?.uid;
  if (!userId) return res.render("login");
  const user = await getUser(userId);
  if (!user) return res.render("login");
  req.user = user;
  next();
}
module.exports = {
  restrictToOnlyAuthUser,
};
