class Component {
    constructor (descendants = []) {
        this.children = descendants;
    }
    render () {
        throw new Error ('descendants must apply a render method')
    }
    renderHTML () {//loop over and convert all to strings
        return this.children.map((onlyChild) => {
        if (typeof onlyChild === "string") {
          return onlyChild;
        }
        return onlyChild.render();//2 returns?
      }).join("");

    }
}
module.exports = Component