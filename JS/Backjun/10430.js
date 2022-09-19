// https://www.acmicpc.net/problem/10430
// 나머지

// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
// let x = input[0];
// let y = input[1];
// let z = input[2];
const x = parseInt(input[0]);
const y = parseInt(input[1]);
const z = parseInt(input[2]);

console.log((x + y) % z);
console.log(((x % z) + (y % z)) % z);
console.log((x * y) % z);
console.log(((x % z) * (y % z)) % z);
