const CustomError = require("../extensions/custom-error");

//First try. Recursively but the test has another opinion((
// class DepthCalculator {
//   max = [];
//   calculateDepth(arr) {
//     this.countLevel(arr,1);

//     const res = Math.max(...this.max);
//     this.max = [];
//     return res;
//   };

//   countLevel(arr, level){
//     arr.forEach(item => {
//       if(Array.isArray(item)){
//           this.countLevel(item, level+1);
//       }
//     });
//     this.max.push(level);
//   }
// }


class DepthCalculator {
  calculateDepth(arr, lvl = 1, max = [lvl]) {

    arr.forEach(item => {
      if (Array.isArray(item)) {
        max.push(lvl+1);
        this.calculateDepth(item, lvl + 1, max);
      }
    });

    return Math.max(...max);
  };
}

module.exports = DepthCalculator;


const dc = new DepthCalculator();
console.log(dc.calculateDepth([1, 2, 3, 4, 5,]));