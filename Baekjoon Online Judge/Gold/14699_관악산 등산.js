const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const shelter = [0].concat(input[1].split(" ").map(Number));
const sortedShelter = shelter
  .map((height, num) => [num, height])
  .sort((a, b) => b[1] - a[1]);

const maxVisit = Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => new Set());

for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (shelter[a] > shelter[b]) {
    graph[b].add(a);
  } else {
    graph[a].add(b);
  }
}

sortedShelter.forEach(([start, _]) => {
  let visit = 0;
  graph[start].forEach((node) => {
    visit = Math.max(visit, maxVisit[node]);
  });
  maxVisit[start] = visit + 1;
});

for (let i = 1; i <= N; i++) {
  console.log(maxVisit[i]);
}
