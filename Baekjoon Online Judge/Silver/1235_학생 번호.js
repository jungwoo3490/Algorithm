const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let studentNum = [];
let splitNum, allDiff, k;

for (i = 1; i <= N; i++) {
  studentNum.push(input[i]);
}

for (i = 0; i < input[1].length; i++) {
  splitNum = [];
  splitNum.push(
    studentNum[0].substring(studentNum[0].length - 1 - i, studentNum[0].length)
  );
  allDiff = true;

  for (j = 1; j < N; j++) {
    if (
      splitNum.includes(
        studentNum[j].substring(
          studentNum[j].length - 1 - i,
          studentNum[j].length
        )
      )
    ) {
      allDiff = false;
      break;
    } else {
      splitNum.push(
        studentNum[j].substring(
          studentNum[j].length - 1 - i,
          studentNum[j].length
        )
      );
    }
  }

  if (allDiff) {
    k = i + 1;
    break;
  }
}

console.log(k);
