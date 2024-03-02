const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (i = 0; i < input.length - 1; i++) {
  let add = 0;
  let divisor = [];
  const N = Number(input[i]);

  for (j = 1; j < N; j++) {
    if (N % j === 0) {
      add += j;
      divisor.push(j);
    }
  }

  if (add === N) {
    console.log(`${N} = ${divisor.join(" + ")}`);
  } else {
    console.log(`${N} is NOT perfect.`);
  }
}
