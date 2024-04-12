const Components = require("./component.js");
const {formatDate} = require("./date.js");//{destrcture to only get one item from the function}
// Equivalent of date.formatDate, date.month etc.
//const headDate = formatDate(new Date()); //from 10 on doc.js
class headerItem extends Components {
    render() {
        return `<header class = "header"><h1><p>${formatDate(new Date())}<p/></header>`
    }
}
module.exports = headerItem