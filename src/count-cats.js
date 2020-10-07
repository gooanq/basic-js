const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(row => {
    row.forEach(element => {
      if(element === '^^'){
        result++;
      }
    });
  });
  return result;
};
