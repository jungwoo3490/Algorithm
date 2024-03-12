const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const coordinate = input[1].split(" ").map(Number);

const cdDeleteDuplicate = Array.from(new Set(coordinate)).sort((a, b) => a - b);
let cdCompression = [];
let mappingObject = {};

for (i = 0; i < cdDeleteDuplicate.length; i++) {
  mappingObject[cdDeleteDuplicate[i]] = i;
}

for (i = 0; i < coordinate.length; i++) {
  cdCompression.push(mappingObject[coordinate[i]]);
}

console.log(cdCompression.join(" "));
