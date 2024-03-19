const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let student;
let students = [];
let winner = [];

const countryCount = new Array(100).fill(0);

for (i = 1; i <= N; i++) {
  student = input[i].split(" ").map(Number);
  students.push(student);
}

students.sort((a, b) => b[2] - a[2]);

for (i = 0; i < students.length; i++) {
  student = students[i];

  if (countryCount[student[0]] < 2) {
    winner.push([student[0], student[1]].join(" "));
    countryCount[student[0]] += 1;
  }

  if (winner.length === 3) {
    break;
  }
}

console.log(winner.join("\n"));
