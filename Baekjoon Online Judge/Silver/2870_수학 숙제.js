const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numArr = [];

for (let i = 1; i < input.length; i++) {
  let isNum = false;
  let numStr = "";
  for (let j = 0; j < input[i].length; j++) {
    if (!isNaN(input[i][j])) {
      // 숫자면
      numStr += input[i][j]; // 숫자 모으기
      isNum = true;
    } else {
      // 문자면
      if (isNum) {
        // 이전까지 숫자였으면 지금까지 모은 숫자 넣기
        // 문자열로 처리한 이유는 Number의 정밀도 문제 (15~16자 넘으면 정밀도 잃어버림)
        const cleanedNum = numStr.replace(/^0+/, "") || "0"; // 앞의 0 제거
        numArr.push(cleanedNum); // 문자열로 저장
        isNum = false;
        numStr = "";
      }
    }
  }

  if (numStr.length !== 0) {
    const cleanedNum = numStr.replace(/^0+/, "") || "0";
    numArr.push(cleanedNum);
  }
}

numArr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
});

console.log(numArr.join("\n"));
