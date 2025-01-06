const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let signal = input[i].trim();
  let isRightPattern = true;

  while (signal.length > 0) {
    if (signal.startsWith("01")) {
      signal = signal.slice(2);
    } else if (signal.startsWith("100")) {
      signal = signal.slice(3);

      while (signal.length > 0 && signal[0] === "0") {
        signal = signal.slice(1);
      }

      if (signal.length === 0) {
        isRightPattern = false;
        break;
      }

      signal = signal.slice(1);

      while (signal.length > 0 && signal[0] === "1") {
        if (signal.length >= 3 && signal[1] === "0" && signal[2] === "0") {
          break;
        } else {
          signal = signal.slice(1);
        }
      }
    } else {
      isRightPattern = false;
      break;
    }
  }

  console.log(isRightPattern ? "YES" : "NO");
}
