const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function bfs() {
  let x, nx;
  let time = 0;
  let queueLen;

  while (queue.length) {
    queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      x = queue.shift();

      if (x === K) {
        return time;
      }

      dx = [1, -1, x];

      for (let j = 0; j < 3; j++) {
        nx = x + dx[j];

        if (nx < 0 || nx > 100000) {
          continue;
        }

        if (visited[nx] === 1) {
          continue;
        }

        visited[nx] = 1;
        queue.push(nx);
      }
    }
    time += 1;
  }

  return time;
}

let [N, K] = input[0].split(" ").map(Number);

let queue = [];
const visited = new Array(100001).fill(0);

visited[N] = 1;

queue.push(N);

let result = bfs();

console.log(result);
