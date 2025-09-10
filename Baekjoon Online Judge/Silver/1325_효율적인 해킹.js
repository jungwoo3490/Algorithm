const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dir = {};

const [N, M] = input[0].split(" ").map(Number);

for (let i = 1; i <= N; i++) {
  dir[i] = [];
}

for (let i = 1; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  dir[B].push(A);
}

let maxNumArr = [];
let maxCount = 0;
let visited = [];

for (let i = 1; i <= N; i++) {
  visited = Array(N + 1).fill(0);
  dfs(i);

  let count = 0;

  for (let j = 0; j < visited.length; j++) {
    count += visited[j];
  }

  // 크면 정답배열 다시 만든다.
  if (count > maxCount) {
    maxNumArr = [];
    maxNumArr.push(i);
    maxCount = count;

    // 같으면 기존 배열에 추가한다.
  } else if (count === maxCount) {
    maxNumArr.push(i);
  }
}

function dfs(num) {
  visited[num] = 1;
  for (let i = 0; i < dir[num].length; i++) {
    if (visited[dir[num][i]] === 0) {
      dfs(dir[num][i]);
    }
  }
}

console.log(maxNumArr.join(" "));
