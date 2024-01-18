const express = require("express");
const app = express();
const connect = require("./connection");
const path = require("path");
const cookieParser = require("cookie-parser");
const urlRouter = require("./Routes/url");
const userRouter = require("./Routes/user");
const staticRouter = require("./Routes/staticRoute");
app.use(cookieParser());
const { restrictToOnlyAuthUser } = require("./middleware/auth");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));
const PORT = 5001;
connect(
  "mongodb+srv://bhuppibhai68:bwcI26c4YbfCjnrl@cluster0.ewzb4xq.mongodb.net/?retryWrites=true&w=majority"
);
app.use("/", staticRouter);
app.use("/url", restrictToOnlyAuthUser, urlRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
