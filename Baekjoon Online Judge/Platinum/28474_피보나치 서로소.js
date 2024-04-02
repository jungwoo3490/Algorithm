const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let arr = [];
let temp, result;

function eulerPhi(num) {
  result = num;
  temp = num;

  if (num % 2 === 0) {
    result /= 2;
    temp /= 2;

    while (temp % 2 === 0) {
      temp /= 2;
    }
  }

  for (let i = 3; i <= Math.floor(Math.sqrt(num)) + 1; i += 2) {
    if (temp === 1) {
      break;
    }

    if (temp % i === 0) {
      result -= Math.floor(result / i);
      temp /= i;

      while (temp % i === 0) {
        temp /= i;
      }
    }
  }

  if (temp > 1) {
    result -= Math.floor(result / temp);
  }

  return result;
}

for (let i = 1; i <= T; i++) {
  arr.push(Number(input[i]));
}

for (let i = 0; i < arr.length; i++) {
  {
    if (arr[i] === 1) {
      console.log(0);
    } else if (arr[i] === 2) {
      console.log(1);
    } else if (arr[i] % 2 === 0) {
      console.log(eulerPhi(arr[i]) + eulerPhi(arr[i] / 2));
    } else {
      console.log(eulerPhi(arr[i]));
    }
  }
}
