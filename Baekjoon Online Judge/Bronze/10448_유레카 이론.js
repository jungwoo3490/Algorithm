const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let K, result;
let gausArr = [];

function gaus(n) {
  return (n * (n + 1)) / 2;
}

for (let i = 1; i < 45; i++) {
  gausArr.push(gaus(i));
}

for (let i = 1; i <= T; i++) {
  K = Number(input[i]);
  result = 0;

  for (let j = 0; j <= gausArr.length; j++) {
    for (let k = 0; k < gausArr.length; k++) {
      for (let l = 0; l < gausArr.length; l++) {
        if (gausArr[j] + gausArr[k] + gausArr[l] === K) {
          result = 1;
        }
      }
    }
  }

  console.log(result);
}
