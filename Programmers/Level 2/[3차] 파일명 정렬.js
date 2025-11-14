function isNumber(str) {
  // Number(" ") === 0 이므로 분기 추가
  if (str === " ") {
    return false;
  }
  return !isNaN(Number(str));
}

function solution(files) {
  var answer = [];

  files.sort((a, b) => {
    let aHead = "";
    let aNumber = "";

    let startIdx = 0;

    for (let i = startIdx; i < a.length; i++) {
      if (isNumber(a[i])) {
        startIdx = i;
        break;
      } else {
        aHead += a[i];
      }
    }

    for (let j = startIdx; j < a.length; j++) {
      if (!isNumber(a[j])) {
        break;
      } else {
        aNumber += a[j];
      }
    }

    let bHead = "";
    let bNumber = "";
    startIdx = 0;

    for (let i = startIdx; i < b.length; i++) {
      if (isNumber(b[i])) {
        startIdx = i;
        break;
      } else {
        bHead += b[i];
      }
    }

    for (let j = startIdx; j < b.length; j++) {
      if (!isNumber(b[j])) {
        break;
      } else {
        bNumber += b[j];
      }
    }

    // 대소문자 구분 안 하고 Head가 같으면
    if (aHead.toLowerCase() === bHead.toLowerCase()) {
      // Number가 같으면
      if (Number(aNumber) === Number(bNumber)) {
        // 순서 유지
        return 0;
      } else {
        // 숫자 기준 오름차순
        return Number(aNumber) - Number(bNumber);
      }
    } else {
      // b가 사전순 뒤이면
      if (aHead.toLowerCase() < bHead.toLowerCase()) {
        // a가 앞
        return -1;
        // a가 사전순 뒤이면
      } else {
        // b가 앞
        return 1;
      }
    }
  });

  return files;
}
