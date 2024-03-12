const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const ticket = input[0];
let count = 1;
let leftTicket, rightTicket, leftSum, rightSum;

for (i = 0; i < ticket.length / 2; i++) {
  leftTicket = ticket
    .substring(0, i + 1)
    .split("")
    .map(Number);
  rightTicket = ticket
    .substring(ticket.length - i - 1, ticket.length)
    .split("")
    .map(Number);
  leftSum = 0;
  rightSum = 0;

  console.log(leftTicket, rightTicket);

  for (j = 0; j < leftTicket.length; j++) {
    leftSum += leftTicket[j];
    rightSum += rightTicket[j];
  }
  console.log(leftSum, rightSum);

  if (leftSum === rightSum) {
    break;
  }

  //   if (
  //     Number(ticket.substring(i, i + 1)) ===
  //     Number(ticket.substring(ticket.length - i - 1, ticket.length - i))
  //   ) {
  //     break;
  //   }
}

console.log(i);
