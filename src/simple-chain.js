const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || position < 1 || position > this.chainArray.length - 1) {
      this.chainArray = [];
      throw new Error;
    } else {
      this.chainArray.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
  const str = this.chainArray.map(
      c => (`( ${c} )`)
    ).join('~~');
    this.chainArray = [];
    return str;
  }
}


module.exports = chainMaker;
