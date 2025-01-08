const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0];
let now = Array(str.length).fill(false);

for (let i = 0; i < str.length; i++) {
  let target = [];
  let target_st = [];
  let j = 0;

  while (j < str.length) {
    if (now[j]) {
      j += 1;
      continue;
    }

    let t = [...now];
    t[j] = true;
    target.push(t);

    let st = "";
    for (let k = 0; k < str.length; k++) {
      if (t[k]) {
        st += str[k];
      }
    }
    target_st.push(st);
    j += 1;
  }

  let min_n = target[0];
  let min_st = target_st[0];

  for (let j = 0; j < target.length; j++) {
    if (target_st[j] < min_st) {
      min_st = target_st[j];
      min_n = target[j];
    }
  }

  console.log(min_st);
  now = min_n;
}
