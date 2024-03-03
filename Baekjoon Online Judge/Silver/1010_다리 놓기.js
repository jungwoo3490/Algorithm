const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let Nfac, Mfac, MNfac;

for (i = 1; i <= T; i++) {
  [Nfac, Mfac, MNfac] = [1, 1, 1];
  const NM = input[i].split(" ").map(Number);
  const N = NM[0];
  const M = NM[1];

  for (j = 1; j <= N; j++) {
    Nfac *= j;
  }

  for (j = 1; j <= M; j++) {
    Mfac *= j;
  }

  for (j = 1; j <= M - N; j++) {
    MNfac *= j;
  }
  console.log(Math.round(Mfac / (MNfac * Nfac)));
}
