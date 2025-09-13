const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);

let map = [];

for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(""));
}

let result = -1;

let dy = [-1, 0, 1, 0];
let dx = [0, 1, 0, -1];

let count;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "L") {
      let queue = [];
      count = -1;
      let visited = Array.from({ length: H }, () => Array(W).fill(0));
      queue.push([i, j]);
      visited[i][j] = 1;
      while (queue.length !== 0) {
        let len = queue.length;
        count += 1;
        for (let k = 0; k < len; k++) {
          let [y, x] = queue.shift();
          for (let l = 0; l < 4; l++) {
            let ny = y + dy[l];
            let nx = x + dx[l];

            if (ny < 0 || ny >= H || nx < 0 || nx >= W) {
              continue;
            }

            if (map[ny][nx] === "W") {
              continue;
            }

            if (visited[ny][nx] === 1) {
              continue;
            }

            visited[ny][nx] = 1;
            queue.push([ny, nx]);
          }
        }
      }
      if (count > result) {
        result = count;
      }
    }
  }
}

console.log(result);
