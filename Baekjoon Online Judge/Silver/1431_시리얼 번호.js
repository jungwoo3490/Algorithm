const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let serialNum = [];

for (i = 1; i <= N; i++) {
  serialNum.push(input[i]);
}

serialNum.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    let [aCount, bCount] = [0, 0];

    for (i = 0; i < a.length; i++) {
      if (!isNaN(Number(a[i]))) {
        aCount += Number(a[i]);
      }

      if (!isNaN(Number(b[i]))) {
        bCount += Number(b[i]);
      }
    }

    if (aCount - bCount !== 0) {
      return aCount - bCount;
    } else {
      return a.localeCompare(b);
    }
  }
});

console.log(serialNum.join("\n"));
