const express = require("express");

const app = express();
const port = process.env.PORT | 3000;
const publicDir = "./build/";

app.use(express.static(publicDir));
app.set("view engine", "html");
app.set("views", publicDir);
app.engine("html", require("hbs").__express);
app.use(express.json());

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
