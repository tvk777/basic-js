const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const string = str ? str.toString() : 
  str===null ? 'null' : '';
  const repeatTimes = options.repeatTimes ? parseInt(options.repeatTimes) : 1;
  const separator = options.separator ? options.separator.toString() : '+';
  const addition = options.addition ? options.addition.toString() 
  : (typeof options.addition === 'boolean' && !!options.addition===false  && options.addition!==null) ? 'false' 
  : options.addition !== null ? '' : 'null';  
  const additionRepeatTimes = options.additionRepeatTimes ? parseInt(options.additionRepeatTimes) : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator.toString() : '|';


return (string + ((addition + additionSeparator).repeat(additionRepeatTimes).slice(0,-(additionSeparator.length))  + separator)).repeat(repeatTimes).slice(0, -(separator.length))

};
  