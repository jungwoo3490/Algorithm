const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let arr;
let charge;
let coins = [25, 10, 5, 1];

for (i = 1; i <= T; i++) {
  arr = [];
  charge = Number(input[i]);

  for (j = 0; j < coins.length; j++) {
    arr.push(Math.trunc(charge / coins[j]));
    charge = charge % coins[j];
  }
  console.log(arr.join(" "));
}
