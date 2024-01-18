const mongoose = require("mongoose");

function connection(url) {
  mongoose.connect(url).then(() => console.log("Database connected!"));
}
module.exports = connection;
