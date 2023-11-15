function solution(clothes) {
  let answer = 1;

  let cloth = new Map();
  for (let i in clothes) {
    cloth.set(clothes[i][1], (cloth.get(clothes[i][1]) || 0) + 1);
  }

  for (let [k, v] of cloth) {
    answer *= v + 1;
  }

  answer -= 1;

  return answer;
}
