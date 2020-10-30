const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  let concentration = 0.693 / HALF_LIFE_PERIOD;
  let sampleAge = Math.log(MODERN_ACTIVITY / sampleActivity) / concentration;
  if (!sampleActivity || sampleActivity == 0 || isNaN) {
    return false;
  } else return Math.ceil(sampleAge);
};