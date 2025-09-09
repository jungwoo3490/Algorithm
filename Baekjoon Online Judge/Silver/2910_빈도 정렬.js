const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
let countDir = {};

let prior = 1;

for (let i = 0; i < arr.length; i++) {
  if (!countDir[arr[i]]) {
    countDir[arr[i]] = { count: 1, prior: prior };
    prior += 1;
  } else {
    countDir[arr[i]].count += 1;
  }
}

arr.sort((a, b) => {
  if (countDir[a].count === countDir[b].count) {
    return countDir[a].prior - countDir[b].prior;
  } else {
    return countDir[b].count - countDir[a].count;
  }
});

console.log(arr.join(" "));
