const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[0].split(" ").map(Number);

const copyArr1 = JSON.parse(JSON.stringify(arr));
const copyArr2 = JSON.parse(JSON.stringify(arr));
const ascArr = copyArr1.sort((a, b) => a - b);
const descArr = copyArr2.sort((a, b) => b - a);

if (JSON.stringify(arr) === JSON.stringify(ascArr)) {
  console.log("ascending");
} else if (JSON.stringify(arr) === JSON.stringify(descArr)) {
  console.log("descending");
} else {
  console.log("mixed");
}
