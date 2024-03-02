const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (i = 0; i < input.length - 1; i++) {
  const AB = input[i].split(" ");
  const A = Number(AB[0]);
  const B = Number(AB[1]);

  if (B % A === 0) {
    console.log("factor");
  } else if (A % B === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
