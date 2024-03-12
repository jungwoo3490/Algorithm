const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const target = Number(input[2]);

let count = 0;
const arrSet = new Set(arr);

for (i = 0; i < arr.length; i++) {
  arrSet.delete(arr[i]);

  if (arrSet.has(target - arr[i])) {
    count += 1;
  }
}

console.log(count);
