const URL = require("../Model/url");
const shortid = require("shortid");
async function handleGenrateNewShortURL(req, res) {
  const short = shortid();

  await URL.create({
    shortId: short,
    redirectURL: req.body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  console.log("url Created", short);
  return res.render("home", { url: short });
}

async function handleGetToRedirectURL(req, res) {
  const short = req.params.shortid;
  await URL.findOneAndUpdate(
    { shortId: short },
    { $push: { visitHistory: { timestamps: Date.now() } } }
  ).then((one) => {
    if (one) {
      res.redirect(one.redirectURL);
    } else {
      console.log("URL not found!");
    }
  });
}

module.exports = { handleGenrateNewShortURL, handleGetToRedirectURL };
