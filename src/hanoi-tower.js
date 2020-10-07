const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let count = 0;

  for (let i = 0; i < disksNumber; i++) {
    count  = count  * 2 + 1;
  }

  return {
    turns: count ,
    seconds: Math.floor(count  / (turnsSpeed / 3600))
  };
};
