function isNumber(chr) {
  return !isNaN(Number(chr));
}

function solution(s) {
  let answer = [];
  let tuples = [];

  // 집합들을 감싸는 {} 제거
  s = s.slice(1, s.length - 1);
  // 뭔가 각 튜플을 구분할 필요가 있는데, 나는 "{"를 기준으로 일단 split 했다.
  let splitArr = s.split("{");

  for (let i = 0; i < splitArr.length; i++) {
    // "{"로 split하면 맨 앞에 "" element가 추가되는데, 이걸 거르기 위해 맨 앞이 숫자일때만 튜플 취급을 한다.
    if (isNumber(splitArr[i][0])) {
      let tuple = [];
      for (let j = 0; j < splitArr[i].length; j++) {
        // 숫자인 부분만 필터링
        if (isNumber(splitArr[i][j])) {
          // 숫자가 한 자리가 아닐 수도 있기 때문에 자릿수를 모아서 한꺼번에 튜플 요소로 push한다.
          numStr = splitArr[i][j];
          while (true) {
            // 다음 자리가 숫자가 아니면 자릿수 그만 누적
            if (!isNumber(splitArr[i][j + 1])) {
              break;
            } else {
              // 다음 자리가 숫자이면 자릿수 누적
              numStr += splitArr[i][j + 1];
              j += 1;
            }
          }
          // 다 모았으면 현재 튜플 요소로 push
          tuple.push(Number(numStr));
        }
      }
      // 튜플
      tuples.push(tuple);
    }
  }

  // 튜플 길이순으로 정렬
  // 왜냐하면 튜플 집합은 원소 순서가 바뀌어도 상관없다!! 작은 집합부터 원소를 누적해가면서 누적되지 않은 원소를 하나씩 순서대로 추가해나가면 그것이 원본 튜플이 된다!!
  tuples.sort((a, b) => a.length - b.length);

  // 누적되지 않은 원소 순서대로 추가
  for (let i = 0; i < tuples.length; i++) {
    for (let j = 0; j < tuples[i].length; j++) {
      if (!answer.includes(tuples[i][j])) {
        answer.push(tuples[i][j]);
      }
    }
  }

  return answer;
}
