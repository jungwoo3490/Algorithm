const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dice = input[0].split(" ");

const dice1 = Number(dice[0]);
const dice2 = Number(dice[1]);
const dice3 = Number(dice[2]);

if (dice1 == dice2 && dice2 == dice3) {
   console.log(10000 + (dice1 * 1000));
} else if (dice1 == dice2 || dice1 == dice3) {
    console.log(1000 + (dice1 * 100));
} else if (dice2 == dice3) {
    console.log(1000 + (dice2 * 100));
} else {
    let max = dice1 >= dice2 && dice1 >= dice3 ? dice1 : dice2 >= dice3 ? dice2 : dice3;
    console.log(max * 100);
}