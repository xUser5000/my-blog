const express = require("express");
const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
