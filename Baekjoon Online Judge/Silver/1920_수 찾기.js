const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arrA = input[1].split(" ").map(Number);

const mapArr = new Map();

arrA.forEach((num) => {
  mapArr.set(num, true);
});

const arrX = input[3].split(" ").map(Number);

for (i = 0; i < arrX.length; i++) {
  if (mapArr.has(arrX[i])) {
    console.log(1);
  } else {
    console.log(0);
  }
}
