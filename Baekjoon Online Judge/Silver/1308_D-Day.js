const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const today = input[0].split(" ").map(Number);
const dDay = input[1].split(" ").map(Number);

let day = 0;
let fixToday = [];

function isYoon(a) {
  if (a % 4 === 0) {
    if (a % 100 === 0) {
      if (a % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

if (
  dDay[0] - today[0] > 1000 ||
  (dDay[0] - today[0] === 1000 &&
    (dDay[1] > today[1] || (dDay[1] === today[1] && dDay[2] >= today[2])))
) {
  console.log("gg");
} else {
  if (today[1] < dDay[1]) {
    fixToday = [dDay[0], today[1], today[2]];
    if (today[1] <= 2) {
      for (i = today[0]; i <= dDay[0] - 1; i++) {
        isYoon(i) ? (day += 366) : (day += 365);
      }
    } else {
      for (i = today[0]; i <= dDay[0] - 1; i++) {
        isYoon(i + 1) ? (day += 366) : (day += 365);
      }
    }
  } else if (today[1] === dDay[1]) {
    if (dDay[2] < today[2]) {
      fixToday = [dDay[0] - 1, today[1], today[2]];
      if (today[1] <= 2) {
        for (i = today[0]; i < dDay[0] - 1; i++) {
          isYoon(i) ? (day += 366) : (day += 365);
        }
      } else {
        if (dDay[0] - today[0] !== 1) {
          for (i = today[0] + 1; i <= dDay[0] - 1; i++) {
            isYoon(i) ? (day += 366) : (day += 365);
          }
        }
      }
    } else {
      fixToday = [dDay[0], today[1], today[2]];
      if (today[1] <= 2) {
        for (i = today[0]; i <= dDay[0] - 1; i++) {
          isYoon(i) ? (day += 366) : (day += 365);
        }
      } else {
        for (i = today[0]; i <= dDay[0] - 1; i++) {
          isYoon(i + 1) ? (day += 366) : (day += 365);
        }
      }
    }
  } else {
    fixToday = [dDay[0] - 1, today[1], today[2]];
    if (today[1] <= 2) {
      for (i = today[0]; i < dDay[0] - 1; i++) {
        isYoon(i) ? (day += 366) : (day += 365);
      }
    } else {
      if (dDay[0] - today[0] !== 1) {
        for (i = today[0] + 1; i <= dDay[0] - 1; i++) {
          isYoon(i) ? (day += 366) : (day += 365);
        }
      }
    }
  }

  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const month30 = [4, 6, 9, 11];

  while (true) {
    if (
      (dDay[0] !== fixToday[0] ||
        dDay[1] !== fixToday[1] ||
        dDay[2] !== fixToday[2]) === false
    ) {
      break;
    }

    if (month31.includes(fixToday[1]) && fixToday[2] >= 31) {
      fixToday[1] += 1;
      fixToday[2] = 0;
    }

    if (month30.includes(fixToday[1]) && fixToday[2] >= 30) {
      fixToday[1] += 1;
      fixToday[2] = 0;
    }

    if (
      (fixToday[1] === 2 && fixToday[2] >= 28 && !isYoon(fixToday[0])) ||
      (fixToday[1] === 2 && fixToday[2] >= 29 && isYoon(fixToday[0]))
    ) {
      fixToday[1] += 1;
      fixToday[2] = 0;
    }

    if (fixToday[1] >= 13) {
      fixToday[0] += 1;
      fixToday[1] = 1;
    }
    day += 1;
    fixToday[2] += 1;
  }

  console.log(`D-${day}`);
}
