import express from "express";
import ejs from "ejs";

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("list");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/update", (req, res) => {
  res.render("update");
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
