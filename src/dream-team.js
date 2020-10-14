const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members && members.length > 0
    ? members.map(name =>
      typeof name === 'string' && name.length > 0 && name !== ' '
        ? name.trim().charAt(0).toUpperCase()
        : ''
    ).sort().join('')
    : false;
};
