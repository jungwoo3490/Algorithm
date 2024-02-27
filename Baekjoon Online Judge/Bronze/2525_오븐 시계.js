const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const time = input[0].split(" ");
let hour = Number(time[0]);
let minute = Number(time[1]);
const needTime = Number(input[1]);

hour += Math.trunc((minute + needTime) / 60); 
minute = ((minute + needTime) % 60);

hour = hour >= 24 ? hour - 24 : hour

console.log(hour + " " + minute);