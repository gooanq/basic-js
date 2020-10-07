const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = dateSample;
function dateSample(sampleActivity) {
  if ((typeof (sampleActivity) !== 'string')) return false;

  let activity = Number.parseFloat(sampleActivity);
  if (activity > 15 || activity <= 0 || isNaN(activity)) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) * (0.693 / HALF_LIFE_PERIOD));
};

