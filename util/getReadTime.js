function getReadTime (postContent = "") {
    return Math.round(postContent.split(" ").length / 250);
}

module.exports = { getReadTime };
