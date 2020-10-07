const CustomError = require("../extensions/custom-error");
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
  max = 0;

  calculateDepth(arr, lvl = 1) {

    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.calculateDepth(item, lvl + 1);
      }
    });

    if (lvl > this.max) {
      this.max = lvl;
    }

    return this.max;
  };

}

module.exports = DepthCalculator;


const dc = new DepthCalculator();
console.log(dc.calculateDepth([[[[[]]]]]));