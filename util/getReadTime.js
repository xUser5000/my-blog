function getReadTime (postContent = "") {
    return Math.round(postContent.split(" ").length / 225);
}

module.exports = { getReadTime };
