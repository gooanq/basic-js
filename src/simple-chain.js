const CustomError = require("../extensions/custom-error");

const chainMaker = {
  items: [],

  getLength() {
    return this.items.length;
  },

  addLink(value) {
    this.items.push(value);
    return this;
  },

  removeLink(position) {
    if (!isNaN(position) && position > 0 && position <= this.items.length) {
      this.items.splice(position - 1, 1);
      return this;
    }

    this.items = [];
    throw new Error();
  },

  reverseChain() {
    this.items.reverse();
    return this;
  },

  finishChain() {
    const result = this.items.map(item => `( ${item} )`).join('~~');
    this.items = [];
    return result;
  }
};

module.exports = chainMaker;
