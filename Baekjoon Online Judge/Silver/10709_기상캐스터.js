const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);

let visited = Array.from({ length: H }, () => Array(W).fill(-1));
let map = [];

function dfs(y, x, seconds) {
  visited[y][x] = seconds;

  if (x + 1 >= W) {
    return;
  }

  if (visited[y][x + 1] !== -1) {
    return;
  }

  if (map[y][x + 1] === "c") {
    return;
  }

  dfs(y, x + 1, seconds + 1);
}

for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(""));
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "c") {
      dfs(i, j, 0);
    }
  }
}

for (let i = 0; i < H; i++) {
  console.log(visited[i].join(" "));
}
