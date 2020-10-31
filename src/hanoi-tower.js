const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor((3600*turns)/turnsSpeed);
  return { turns: turns, seconds: seconds };
};
