const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let know = input[1].split(" ").map(Number);

let knowSet = new Set();

for (let i = 1; i < know.length; i++) {
  knowSet.add(know[i]);
}

let unionFind = [];

for (i = 0; i <= N; i++) {
  unionFind.push(i);
}

function getParent(unionFind, n) {
  if (unionFind[n] === n) {
    return n;
  } else {
    return getParent(unionFind, unionFind[n]);
  }
}

function unionParent(unionFind, a, b) {
  a = getParent(unionFind, a);
  b = getParent(unionFind, b);

  if (a < b) unionFind[b] = a;
  else unionFind[a] = b;
}

for (let i = 2; i < M + 2; i++) {
  party = input[i].split(" ").map(Number);

  for (let j = 2; j <= party[0]; j++) {
    unionParent(unionFind, party[1], party[j]);
  }
}

unionFind = unionFind.map((value, index) => getParent(unionFind, index));

let knowArr = Array.from(knowSet);
let result = M;

for (let i = 0; i < knowArr.length; i++) {
  for (let j = 1; j <= N; j++) {
    if (unionFind[knowArr[i]] === unionFind[j]) {
      knowSet.add(j);
    }
  }
}

for (let i = 2; i < M + 2; i++) {
  party = input[i].split(" ").map(Number);

  for (let j = 1; j <= party[0]; j++) {
    if (knowSet.has(unionFind[party[j]])) {
      result -= 1;
      break;
    }
  }
}

console.log(result);
