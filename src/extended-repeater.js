const CustomError = require("../extensions/custom-error");

module.exports = repeater;
function repeater(str, options) {
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      result += String(addition);
      if (j !== (additionRepeatTimes - 1)) {
        result += String(additionSeparator);
      }
    }

    if (i !== (repeatTimes - 1)) {
      result += String(separator);
    }
  }

  return result;
};

