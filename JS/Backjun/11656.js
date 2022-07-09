// 접미사 배열
// https://www.acmicpc.net/problem/11656
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";

let input = fs.readFileSync(filePath).toString();

let arr = [];

for (let i = 0; i < input.length; i++) {
  let x = input.slice(i, input.length + 1);
  arr.push(x.trim());
}

console.log(arr.sort().join(`\n`).trim());
// arr.sort().forEach((element) => {
//   console.log(String(element));
// });
