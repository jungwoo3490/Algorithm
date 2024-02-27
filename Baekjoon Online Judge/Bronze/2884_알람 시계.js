const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const time = input[0].split(" ");
let hour = Number(time[0]);
let minute = Number(time[1]);

if (minute < 45) {
    hour = hour == 0 ? 23 : hour - 1;
    minute += 15;
} else {
    minute -= 45;
}

console.log(hour + " " + minute);