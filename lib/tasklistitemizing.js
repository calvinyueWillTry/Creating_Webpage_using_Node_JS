const Components = require("./component.js");
class tasklisting extends Components {
    constructor (descendants, priority = false) {
        super(descendants);
        this.order = priority;
    }
    render () {
        let classNames = "tasks-item";
        if (this.order) {
            classNames +=  "tasks-item-priority";
        }
        return `<li class = "${classNames}">${this.renderHTML()}</li>`;
    }
}
module.exports = tasklisting