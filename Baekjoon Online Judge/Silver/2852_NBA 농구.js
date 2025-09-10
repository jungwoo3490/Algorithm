const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let totalWin1Time = [0, 0];
let totalWin2Time = [0, 0];

let point1 = 0;
let point2 = 0;

// 이전 득점시간
let lastGoalTime = [0, 0];

for (let i = 1; i < input.length; i++) {
  let [득점자, 득점시간] = input[i].split(" ");
  let [MM, SS] = 득점시간.split(":").map(Number);
  let leadedMinute = MM - lastGoalTime[0];
  let leadedSeconds = SS - lastGoalTime[1];

  // 빼는 거니까 초가 0 미만인 케이스 고려
  if (leadedSeconds < 0) {
    leadedSeconds = 60 + leadedSeconds;
    leadedMinute -= 1;
  }

  if (point1 > point2) {
    // 1이 이기고 있었으면
    totalWin1Time = [
      totalWin1Time[0] + leadedMinute,
      totalWin1Time[1] + leadedSeconds,
    ];

    // 더하는 거니까 초가 60 이상인 케이스 고려
    if (totalWin1Time[1] >= 60) {
      totalWin1Time[1] -= 60;
      totalWin1Time[0] += 1;
    }
  }

  if (point2 > point1) {
    // 2가 이기고 있었으면
    totalWin2Time = [
      totalWin2Time[0] + leadedMinute,
      totalWin2Time[1] + leadedSeconds,
    ];

    // 더하는 거니까 초가 60 이상인 케이스 고려
    if (totalWin2Time[1] >= 60) {
      totalWin2Time[1] -= 60;
      totalWin2Time[0] += 1;
    }
  }
  if (Number(득점자) === 1) {
    point1 += 1;
  } else {
    point2 += 1;
  }

  lastGoalTime = [MM, SS];
}

let leadedMinute = 48 - lastGoalTime[0];
let leadedSeconds = 0 - lastGoalTime[1];

if (leadedSeconds < 0) {
  leadedSeconds = 60 + leadedSeconds;
  leadedMinute -= 1;
}

if (point1 > point2) {
  totalWin1Time = [
    totalWin1Time[0] + leadedMinute,
    totalWin1Time[1] + leadedSeconds,
  ];

  // 더하는 거니까 초가 60 이상인 케이스 고려
  if (totalWin1Time[1] >= 60) {
    totalWin1Time[1] -= 60;
    totalWin1Time[0] += 1;
  }
}

if (point2 > point1) {
  totalWin2Time = [
    totalWin2Time[0] + leadedMinute,
    totalWin2Time[1] + leadedSeconds,
  ];

  // 더하는 거니까 초가 60 이상인 케이스 고려
  if (totalWin2Time[1] >= 60) {
    totalWin2Time[1] -= 60;
    totalWin2Time[0] += 1;
  }
}

function 시간정규화(time) {
  time = time.map(String);
  for (let i = 0; i < 2; i++) {
    if (time[i].length === 1) {
      time[i] = "0" + time[i];
    }
  }

  console.log(`${time[0]}:${time[1]}`);
}

시간정규화(totalWin1Time);
시간정규화(totalWin2Time);
