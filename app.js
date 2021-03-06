const express = require("express");
const fs = require("fs");
const path = require("path");
const compression = require('compression');
const morgan = require("morgan");
const { markdownConverter } = require("./util/markdownConverter");
const { parseDate, toString } = require("./util/DateUtil");
const { getReadTime } = require("./util/getReadTime");
const { CacheStorage } = require("./cache");

const app = express();

app.use("/static", express.static("static"));
app.use(compression());
app.set("view engine", "ejs");
if (process.env.NODE_ENV === "production") app.use(morgan("common"));
else app.use(morgan("dev"));

/* Redirect from HTTP to HTTPs, if in production mode */
app.use((req, res, next) => {
    if (
        process.env.NODE_ENV === "production" &&
        req.headers["x-forwarded-proto"] !== "https"
    ) {
        return res.redirect("https://" + req.headers.host + req.url);
    }
    next();
});

let posts = fs.readdirSync(path.join(__dirname, "posts")).reverse();

app.get("/", (req, res) => res.redirect("/index"));

/* Setup the caching layer */
let cacheStorage = new CacheStorage();
app.use((req, res, next) => {
    if (cacheStorage.has(req.url)) {
        // Cache hit
        let entry = cacheStorage.get(req.url);
        res.render(entry.view, entry.data);
    } else {
        // Cache miss
        next();
    }
});

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
    let entry = {
        view: "index",
        data: { posts: feed }
    };
    cacheStorage.store(req.url, entry);
    res.render(entry.view, entry.data);
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
    let entry = {
        view: "post",
        data: {
            content: postHTML,
            title: postMetaData.title,
            description: postMetaData.description,
            date: toString(parseDate(postMetaData.date)),
            readTime: getReadTime(postHTML)
        }
    };
    cacheStorage.store(req.url, entry);
    res.render(entry.view, entry.data);
});

app.get("/about", (req, res) => {
    res.render("about");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
