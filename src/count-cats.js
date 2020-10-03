const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let cats = 0;
  arr.map(items => {
    cats += items.filter(item => item === '^^').length;
  });
  return cats;
};
