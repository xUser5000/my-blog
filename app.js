const express = require("express");
const ejs = require("ejs");
const markdownConverter = require("markdown-it")();
const fs = require("fs");
const path = require("path");

const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.redirect("/index"));
app.get("/index", (req, res) => res.render("index"));

let posts = fs.readdirSync(path.join(__dirname, "posts"));

app.get("/post/:postId", (req, res) => {
    let { postId } = req.params;
    if (!posts.includes(postId)) {
        res.status(404).end();
        return;
    }
    let postMarkdown = fs.readFileSync(path.join(__dirname, "posts", postId, "content.md"), "utf-8");
    let postMetaData = JSON.parse(
        fs.readFileSync(path.join(__dirname, "posts", postId, "metadata.json"))
    );
    console.log(postMetaData);
    let postHTML = markdownConverter.render(postMarkdown);
    res.render("post", {
        content: postHTML,
        metadata: postMetaData
    });
});

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
