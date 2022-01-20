const hljs = require('highlight.js/lib/common');
const md = require('markdown-it');

module.exports = {
    markdownConverter: md({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                       hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                       '</code></pre>';
                } catch (__) {}
            }
            return '<pre class="hljs"><code>' + str + '</code></pre>';
        }
    })
};
