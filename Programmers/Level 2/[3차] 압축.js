// n번째 글자 검사
// 있으면 n + 1번째 검사,
// 있으면 없을때까지 쭉쭉 검사
// 없으면 있는 데까지 indexOf로 인덱스 가져와서 answer에 push, 다음꺼 하나 붙여서 dic에 추가

function solution(msg) {
  let answer = [];

  // 1글자 단어 사전 초기화
  //  indexOf 값을 색인 번호와 대응시키기 위해 0번 인덱스 비워놓았다.
  let dic = [
    "",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < msg.length; i++) {
    // 한 글자 먼저 가져온 다음
    let slice = msg[i];
    while (true) {
      // 만약 다음꺼 붙인 게 사전에 있으면
      if (dic.includes(slice + msg[i + 1])) {
        // slice에 다음꺼 추가하고
        slice = slice + msg[i + 1];
        // i 증가시키면서 없을때까지 계속 검사
        i += 1;
        // 사전에 없으면
      } else {
        // 누적된 입력까지의 인덱스 찾아서 색인 번호 answer 추가
        answer.push(dic.indexOf(slice));
        // 다음 글자 붙여서 사전에 추가
        dic.push(slice + msg[i + 1]);
        break;
      }
    }
  }

  return answer;
}
