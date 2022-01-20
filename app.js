const express = require("express");
const fs = require("fs");
const path = require("path");
const { markdownConverter } = require("./util/markdownConverter");
const { parseDate, toString } = require("./util/DateUtil");

const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "ejs");

let posts = fs.readdirSync(path.join(__dirname, "posts")).reverse();

app.get("/", (req, res) => res.redirect("/index"));
app.get("/index", (req, res) => {
    let feed = posts.map(post => {
        let metadata = JSON.parse(
            fs.readFileSync(path.join(__dirname, "posts", post, "metadata.json"))
        );
        return {
            title: metadata.title,
            description: metadata.description,
            date: toString(parseDate(metadata.date)),
            url: "/post/" + post
        };
    });
    res.render("index", { posts: feed });
});

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
    let postHTML = markdownConverter.render(postMarkdown);
    res.render("post", {
        content: postHTML,
        title: postMetaData.title,
        description: postMetaData.description,
        date: toString(parseDate(postMetaData.date))
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
