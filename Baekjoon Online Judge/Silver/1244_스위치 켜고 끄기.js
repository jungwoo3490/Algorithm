const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let switchList = input[1].split(" ").map(Number);
const N = Number(input[2]);
let result = "";

function toggleSwitch(n) {
  if (n === 1) {
    return 0;
  } else {
    return 1;
  }
}

for (i = 0; i < N; i++) {
  const Student = input[i + 3].split(" ").map(Number);
  const gender = Student[0];
  const num = Student[1];

  if (gender === 1) {
    for (j = 0; j < switchList.length; j++) {
      if ((j + 1) % num === 0) {
        switchList[j] = toggleSwitch(switchList[j]);
      }
    }
  } else {
    switchList[num - 1] = toggleSwitch(switchList[num - 1]);

    for (k = 1; k <= Math.min(num - 1, switchList.length - num); k++) {
      if (switchList[num - 1 - k] !== switchList[num - 1 + k]) {
        break;
      } else {
        switchList[num - 1 - k] = toggleSwitch(switchList[num - 1 - k]);
        switchList[num - 1 + k] = toggleSwitch(switchList[num - 1 + k]);
      }
    }
  }
}

for (l = 1; l <= switchList.length; l++) {
  if (l === switchList.length) {
    result += `${switchList[l - 1]}`;
  } else {
    result += `${switchList[l - 1]} `;
  }
  if (l % 20 === 0) {
    result += "\n";
  }
}

console.log(result);
