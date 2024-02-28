const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let attendance = new Array(30);
attendance.fill(0);

for (i = 0; i < 30; i++) {
    attendance[Number(input[i]) - 1] = 1;
}

for (i = 0; i < 30; i++) {
    if (attendance[i] === 0) {
        console.log(i + 1);
    }
}