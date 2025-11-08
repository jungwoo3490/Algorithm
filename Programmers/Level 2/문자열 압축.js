// 기준 문자열을 0부터 i개로 잡고, 카운트는 1로 함.
// i개 잘라서 부분문자열 만들고, 기준문자열과 같으면 카운트 1 중가함
// 기준문자열과 다르면 카운트 + 기준을 압축문자열에 추가하고, 부분문자열을 기준문자열로 대체

// i는 자를 개수
// j는 j부터 j + i 만큼 자르기 -> slice 사용
// j += i로 증가폭 설정

function solution(s) {
  let minStr = "";
  // <=인 이유는 s개가 최소로 자르는 경우일 수 있기 때문
  // ex) "a"
  for (let i = 1; i <= s.length; i++) {
    let resStr = "";
    // 초기에는 0부터 i개 자르기
    let standardStr = s.slice(0, i);
    // 같은게 몇 개 나왔는지
    let count = 1;
    // i는 몇개씩 자를지 개수
    for (let j = i; j < s.length; j += i) {
      // i개씩 자르기,
      let subStr = s.slice(j, j + i);
      // 기준 문자열과 부분문자열이 같으면 카운트 증가
      if (standardStr === subStr) {
        count += 1;
      } else {
        if (count === 1) {
          // 1개이면 앞에 1 안 붙이고 문자열 추가
          resStr += standardStr;
        } else {
          // 2개 이상이면 앞에 개수 붙이고 문자열 추가
          resStr += count.toString() + standardStr;
        }
        // 다른게 나왔으니까 카운트 초기화, 기준 문자열을 대체
        count = 1;
        standardStr = subStr;
      }
    }

    // 맨 마지막에 검사하는 부분문자열은 처리가 되지 않고 종료된다. 기준 문자열과 다른게 나와야 문자열을 추가하기 때문
    // 그래서 마지막에 한 번 더 문자열 추가 로직을 돌려준다.
    if (count === 1) {
      resStr += standardStr;
    } else {
      resStr += count.toString() + standardStr;
    }

    // minStr이 초기화되지 않았거나 (길이 0)
    // resStr이 minStr보다 길이가 작으면
    // minStr 교체
    if (minStr.length === 0 || minStr.length > resStr.length) {
      minStr = resStr;
    }
  }

  return minStr.length;
}
