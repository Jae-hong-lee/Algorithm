// https://www.acmicpc.net/problem/2609
// 최대공약수와 최소공배수
// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

// 유클리드 호제법 이용하기
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));
let i = a;
let j = b;

while (i % j !== 0) {
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}
console.log(j);
console.log((a * b) / j);
