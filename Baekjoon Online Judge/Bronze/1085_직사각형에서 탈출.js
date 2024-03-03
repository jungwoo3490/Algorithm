const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const xywh = input[0].split(" ");

const x = Number(xywh[0]);
const y = Number(xywh[1]);
const w = Number(xywh[2]);
const h = Number(xywh[3]);

const minX = Math.min(x, w - x);
const minY = Math.min(y, h - y);

console.log(Math.min(minX, minY));
