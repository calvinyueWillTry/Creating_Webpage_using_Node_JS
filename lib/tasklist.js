const Components = require("./component.js");
class tasklisting extends Components {
    constructor (descendant) {
        super(descendant);
    }
    render() {
        this.descendant
        return `<ul class = "tasks">${this.renderHTML()}</ul>`;
    }
}
module.exports = tasklisting