/**
 * Given a string, returns a date object representing the timestamp of the string
 * String format: YYYY-MM-DD
 * @param {String} str raw string
 */
function parseDate (str) {
    let tokens = str.split("-").map(token => parseInt(token));
    return new Date(tokens[0], tokens[1]-1, tokens[2]);
}

/**
 * formats a date object to be as follows:
 * Day(integer) Month Name(first three chars) Year(integer)
 * Example: 20 Jan 2022
 * @param {Date} date
 */
function toString (date) {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];

    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
}

module.exports = { parseDate, toString };
