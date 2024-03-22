const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const commands = input[1].split(" ").map(Number);

class Node {
  prev = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push_front(value) {
    const newNode = new Node(value);
    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
  }
  push_back(value) {
    const newNode = new Node(value);
    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }
  pop_front() {
    if (this.empty()) return -1;
    const front = this.front();
    this.head = this.head.next;
    this.length -= 1;
    return front;
  }
  pop_back() {
    if (this.empty()) return -1;
    const back = this.back();
    this.tail = this.tail.prev;
    this.length -= 1;
    return back;
  }
  size() {
    return this.length;
  }
  empty() {
    return this.length === 0 ? 1 : 0;
  }
  front() {
    if (this.empty()) return -1;
    return this.head.value;
  }
  back() {
    if (this.empty()) return -1;
    return this.tail.value;
  }
  *[Symbol.iterator]() {
    let tmp = this.head;
    while (tmp) {
      yield tmp.value;
      tmp = tmp.next;
    }
  }
}
const deque = new Deque();
let i = 1;

while (commands.length) {
  const command = commands.pop();
  if (command === 1) {
    deque.push_front(i);
  } else if (command === 2) {
    const tmp = deque.pop_front();
    deque.push_front(i);
    deque.push_front(tmp);
  } else if (command === 3) {
    deque.push_back(i);
  }
  i++;
}

console.log([...deque].join(" "));
