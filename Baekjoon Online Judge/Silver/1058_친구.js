const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let relation = [];
let twoFriend = [];
let friendArr;
let copyRelation, friendCount;

for (i = 1; i <= N; i++) {
  relation.push(input[i].split(""));
}

for (i = 0; i < relation.length; i++) {
  copyRelation = JSON.parse(JSON.stringify(relation));
  friendArr = [];

  for (j = 0; j < relation.length; j++) {
    if (copyRelation[i][j] === "Y") {
      friendArr.push(j);
      copyRelation[i][j] = "N";
    }
  }

  friendCount = friendArr.length;

  for (k = 0; k < friendCount; k++) {
    for (l = 0; l < relation.length; l++) {
      if (copyRelation[l][friendArr[k]] === "Y") {
        {
          if (!friendArr.includes(l)) {
            friendArr.push(l);
          }
        }
      }
    }
  }
  twoFriend.push(friendArr.length);
}

console.log(Math.max(...twoFriend));
