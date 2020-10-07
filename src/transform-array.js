const CustomError = require("../extensions/custom-error");

module.exports = transform;

function transform(arr) {
  const length = arr.length;
  const result = arr.slice();
  let i;
  
  for (i = 0; i < length; i++) {
    switch (result[i]) {
      case '--discard-next':
        if (i === (length - 1)) {
          result[i] = null;
        }
        else {
          result[i] = null;
          result[i + 1] = null;
        }
        break;

      case '--discard-prev':
        if (i === 0) {
          result[0] = null;
        }
        else {
          result[i] = null;
          result[i - 1] = null;
        }

        break;

      case '--double-next':
        if (i === (length - 1)) {
          result[i] = null;
        }
        else {
          result[i] = result[i + 1];
        }
        break;

      case '--double-prev':
        if (i===0) {
          result[i] = null;
        }
        else {
          result[i] = result[i - 1];
        }
        break;
    }
  }

  return result.filter(item => item !== null);
};

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));