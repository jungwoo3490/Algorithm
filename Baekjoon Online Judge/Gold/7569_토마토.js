const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, T] = input[0].split(" ").map(Number);

let tomatoes = new Array(T);

for (let i = 0; i < T; i++) {
  tomatoes[i] = [];
  for (let j = i * N + 1; j < i * N + 1 + N; j++) {
    tomatoes[i].push(input[j].split(" ").map(Number));
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.init();
  }

  init() {
    this.count = 0;
    this.front = null;
    this.rear = null;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedPrevFront = this.front;
      cachedPrevFront.prev = node;

      this.front = node;

      node.next = cachedPrevFront;
    }

    this.count += 1;
    return this.count;
  }

  shift() {
    if (this.count === 0) return null;

    const value = this.front.value;

    if (this.count === 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }

    return value;
  }

  push(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedPrevRear = this.rear;
      cachedPrevRear.next = node;

      node.prev = cachedPrevRear;

      this.rear = node;
    }

    this.count += 1;

    return this.count;
  }

  pop() {
    if (this.count === 0) return;

    const value = this.rear.value;

    if (this.count === 1) {
      this.init();
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.count -= 1;
    }

    return value;
  }

  getValue(idx) {
    if (idx >= this.count) return;
    let node = this.front;

    for (let i = 0; i < idx; i += 1) {
      node = node.next;
    }

    return node.value;
  }

  get rawArray() {
    let arr = [];
    let node = this.front;

    for (let i = 0; i < this.count; i += 1) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }

  get length() {
    return this.count;
  }
}

function bfs() {
  let dz = [0, 0, 0, 0, 1, -1];
  let dy = [-1, 0, 1, 0, 0, 0];
  let dx = [0, 1, 0, -1, 0, 0];
  let z, y, x, nz, ny, nx, time;

  while (deque.length) {
    [z, y, x, time] = deque.shift();

    for (let i = 0; i < 6; i++) {
      nz = z + dz[i];
      ny = y + dy[i];
      nx = x + dx[i];

      if (nz < 0 || ny < 0 || nx < 0 || nz >= T || ny >= N || nx >= M) {
        continue;
      }

      if (tomatoes[nz][ny][nx] !== 0) {
        continue;
      }

      deque.push([nz, ny, nx, time + 1]);
      tomatoes[nz][ny][nx] = time + 1;
    }
  }

  let flag = true;

  for (let i = 0; i < T; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (tomatoes[i][j][k] === 0) {
          flag = false;
          break;
        }
      }
    }
  }

  if (flag) {
    return time;
  } else {
    return 0;
  }
}

let deque = new Deque();

for (let i = 0; i < T; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatoes[i][j][k] === 1) {
        deque.push([i, j, k, 1]);
      }
    }
  }
}

const result = bfs() - 1;

console.log(result);
