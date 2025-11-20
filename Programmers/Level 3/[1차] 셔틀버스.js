// 1. 버스가 몇시에 오는지 버스 시간표 구하기
// 2. timetable 오름차순 정렬
// 3. 마지막 버스를 제외하고 버스 도착 시간마다 탈 수 있는 사람을 찾아서 제거하기
// 4. 마지막 버스를 탈 수 있는 가장 늦은 도착 시간 구하기
// 마지막 버스 탈 수 있는 사람의 수가 m명 이상이면 m번째 줄 선 사람 도착 시간 - 1
// 마지막 버스 탈 수 있는 사람 수가 m명 이상이면 그 버스 도착 시간!!

function solution(n, t, m, timetable) {
  // 1. 버스가 몇시에 오는지 버스 시간표 구하기
  let busTimeTable = [[9, 0]];

  for (let i = 1; i < n; i++) {
    let hour = busTimeTable[i - 1][0];
    let minute = busTimeTable[i - 1][1] + t;

    if (minute >= 60) {
      hour += 1;
      minute -= 60;
    }

    busTimeTable.push([hour, minute]);
  }

  // 2. timetable 오름차순 정렬

  timetable = timetable.map((el) => el.split(":").map(Number));

  timetable.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  // 3. 마지막 버스를 제외하고 버스 도착 시간마다 탈 수 있는 사람을 찾아서 제거하기

  for (let i = 0; i < busTimeTable.length - 1; i++) {
    let count = 0;
    while (true) {
      if (count >= m) {
        break;
      }

      if (timetable[0][0] < busTimeTable[i][0]) {
        timetable.shift();
      } else if (
        timetable[0][0] === busTimeTable[i][0] &&
        timetable[0][1] <= busTimeTable[i][1]
      ) {
        timetable.shift();
      }
      count += 1;
    }
  }

  // 4. 마지막 버스를 탈 수 있는 가장 늦은 도착 시간 구하기

  let lastPeople = [];
  let lastBusTime = busTimeTable[n - 1];

  for (let i = 0; i < timetable.length; i++) {
    // 마지막 도착 시간보다 일찍 오면 버스에 탄다.
    if (timetable[i][0] < lastBusTime[0]) {
      lastPeople.push(timetable[i]);
    } else if (
      timetable[i][0] === lastBusTime[0] &&
      timetable[i][1] <= lastBusTime[1]
    ) {
      lastPeople.push(timetable[i]);
    }

    // 버스에 m명 다 차면 끝
    if (lastPeople.length === m) {
      break;
    }
  }

  let answer;

  // 버스에 자리가 없으면 마지막으로 탄 사람보다 1분 일찍 도착하는 것이 최적해이다.
  if (lastPeople.length === m) {
    answerHour = lastPeople[m - 1][0];
    answerMinute = lastPeople[m - 1][1] - 1;

    if (answerMinute < 0) {
      answerHour -= 1;
      answerMinute += 60;
    }

    answer = [answerHour.toString(), answerMinute.toString()];
    // 덜 찼으면 버스 도착 시간 맞춰 도착하는 것이 최적해이다.
  } else {
    answer = [lastBusTime[0].toString(), lastBusTime[1].toString()];
  }

  // answer 포맷 가공

  if (answer[0].length === 1) {
    answer[0] = "0" + answer[0];
  }

  if (answer[1].length === 1) {
    answer[1] = "0" + answer[1];
  }

  answer = answer.join(":");

  return answer;
}
