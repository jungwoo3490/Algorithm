// 한 턴에 m개의 수를 말하고, t개 수를 미리 알아야 하므로 변환해야 할 수는 최대 t * m을 넘어가지 않는다.

// 1. 0부터 t * m까지 n진수로 변환해서 순서를 미리 알아내기
// 2. 한 턴에 어떤 순서로 말하는지 구하고, p번째 수 뽑아내기
// 3. t개 뽑았으면 끝

function solution(n, t, m, p) {
  let orderStr = "";

  // 0부터 t * m까지 n진수로 변환
  for (let i = 0; i < t * m; i++) {
    orderStr += i.toString(n);
  }

  // toString 쓰면 11진수 이상부터 나오는 알파벳이 소문자로 나온다.
  // 답은 대문자를 요구하므로 대문자 처리
  orderStr = orderStr.toUpperCase();

  let answer = "";

  for (let i = 0; i < orderStr.length; i += m) {
    // 한 턴에 어떤 순서로 말하는지
    orderSlice = orderStr.slice(i, i + m);
    // p번째 순서에 말해야 할 것은 p - 1번째 인덱스
    answer += orderSlice[p - 1];

    // t개 구했으면 끝
    if (answer.length === t) {
      return answer;
    }
  }
}
