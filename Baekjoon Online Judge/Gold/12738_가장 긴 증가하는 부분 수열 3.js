const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

let lis = [arr[0]];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (true) {
    mid = Math.trunc((start + end) / 2);

    if (
      (target > lis[mid - 1] && target <= lis[mid]) ||
      ((mid <= 0 || mid >= lis.length - 1) && target <= lis[mid])
    ) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

for (i = 1; i < arr.length; i++) {
  if (arr[i] > lis[lis.length - 1]) {
    lis.push(arr[i]);
  } else {
    lis[binarySearch(lis, arr[i])] = arr[i];
  }
}

console.log(lis.length);
