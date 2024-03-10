const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

const setA = new Set(A);
const setB = new Set(B);

const AMinB = A.filter((num) => !setB.has(num));
const BMinA = B.filter((num) => !setA.has(num));

console.log(AMinB.length + BMinA.length);
