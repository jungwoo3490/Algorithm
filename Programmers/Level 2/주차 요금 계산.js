// 1. records 돌면서 입차면 주차시간 Map에 push, 출차면 pop해서 시간차 계산해서 주차비 Map에 누적
// 2. 차별로 주차비 계산 -> 차량번호로 정렬

// 시간차 구하는 함수
function getTimeGap(inTime, outTime) {
  let [inTimeHour, inTimeMinute] = inTime.split(":").map(Number);
  let [outTimeHour, outTimeMinute] = outTime.split(":").map(Number);

  let hourGap = outTimeHour - inTimeHour;

  // 출차시간이 입차시간보다 항상 뒤이므로 시가 동일하면 출차시간 분이 입차시간보다 무조건 크다. 분 뺀 값 리턴
  if (hourGap === 0) {
    return outTimeMinute - inTimeMinute;
  }

  let minuteGap;

  // 출차시간 시가 입차시간 시보다 크면, 분은 더 작은 케이스가 있음.
  if (inTimeHour < outTimeHour) {
    // 만약 출차시간 분이 입차시간 분보다 작으면
    if (outTimeMinute < inTimeMinute) {
      // 시 차이를 하나 줄이고
      hourGap -= 1;
      // 출차시간 분 + 60 - 입차시간 분이 총 분 차이 (빌림 개념)
      minuteGap = outTimeMinute + 60 - inTimeMinute;
    } else {
      // 아니라면 그냥 분 차이 구하면 댐
      minuteGap = outTimeMinute - inTimeMinute;
    }
  }

  // 총 분 차이를 리턴
  return hourGap * 60 + minuteGap;
}

function solution(fees, records) {
  let answer = [];

  // 자동차별 총 주차시간 누적 map
  let parkingTotalTimeMap = new Map();

  // 자동차별 입차시간 관리 map
  let parkingTimeMap = new Map();

  // 각 record를 공백 기준으로 split하여 순회 편하도록 가공
  records = records.map((record) => record.split(" "));

  for (let i = 0; i < records.length; i++) {
    // 입차이면
    if (records[i][2] === "IN") {
      parkingTimeMap.set(records[i][1], records[i][0]);
    }

    // 출차이면
    if (records[i][2] === "OUT") {
      let parkingTime = parkingTimeMap.get(records[i][1]);
      let timeGap = getTimeGap(parkingTime, records[i][0]);
      let curFee = parkingTotalTimeMap.get(records[i][1]);
      if (curFee === undefined) {
        parkingTotalTimeMap.set(records[i][1], timeGap);
      } else {
        parkingTotalTimeMap.set(records[i][1], curFee + timeGap);
      }
      parkingTimeMap.delete(records[i][1]);
    }
  }

  // 아직 출차하지 않은 차
  let leftCars = Array.from(parkingTimeMap.keys());

  // 아직 출차하지 않은 차들의 출차 시간을 23:59로 해서 주차시간 누적
  for (let i = 0; i < leftCars.length; i++) {
    let parkingTime = parkingTimeMap.get(leftCars[i]);
    let timeGap = getTimeGap(parkingTime, "23:59");
    let curFee = parkingTotalTimeMap.get(leftCars[i]);
    if (curFee === undefined) {
      parkingTotalTimeMap.set(leftCars[i], timeGap);
    } else {
      parkingTotalTimeMap.set(leftCars[i], curFee + timeGap);
    }
    parkingTimeMap.delete(leftCars[i]);
  }

  // 모든 차를 주차번호 순으로 정렬한 배열
  let allCars = Array.from(parkingTotalTimeMap.keys()).sort();

  for (let i = 0; i < allCars.length; i++) {
    let parkingTotalTime = parkingTotalTimeMap.get(allCars[i]);
    let totalFees = fees[1];

    // 기본시간 초과하면 단위시간마다 단위요금을 청구
    if (parkingTotalTime > fees[0]) {
      // 나누어떨어지지 않으면 올림 처리
      totalFees += Math.ceil((parkingTotalTime - fees[0]) / fees[2]) * fees[3];
    }
    answer.push(totalFees);
  }

  return answer;
}
