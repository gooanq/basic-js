const CustomError = require("../extensions/custom-error");

module.exports = createDreamTeam;

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const proccesedArray = members.map(item => {
    if (typeof (item) === 'string') {
      return item.trim().toUpperCase();
    }
  }).filter(item => item !== undefined);

  return proccesedArray.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    else {
      return -1;
    }
  })
    .map(item => item[0])
    .join('');

};
