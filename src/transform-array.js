const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = arr;
  result.map((r, i) => {
    switch (r) {
      case '--discard-next':
        result.splice(i, 1);
        result.splice(i, 1);
        break;
      case '--discard-prev':
        result.splice(i, 1);
        result.splice(i - 1, 1);
        break;
      case '--double-next':
        result.splice(i, 1, result[i + 1]);
        break;
      case '--double-prev':
        result.splice(i, 1, result[i - 1]);
        break;
    }
  })
  return result;
};
