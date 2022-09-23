// https://www.acmicpc.net/problem/1934
// 최소공배수
// 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다.
// 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다.
// 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30

// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

// // console.log(input);
// const nums = input.map((v) => v.split(" "));
// // console.log(nums);
// for (let i = 1; i < nums.length; i++) {
//   console.log(lcm(nums[i][0], nums[i][1]));
// }

// gcd 구하는 함수 (유클리드 호제법) , 최대공약수
function gcd(x, y) {
  while (y > 0) {
    let r = x % y;
    x = y;
    y = r;
  }
  return x;
  // y 가 0이면 (나머지가 0) x 값 반환
}

// 최소공배수 구하는 함수
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}
// --------------- 시간초과 ---------------
// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// input.shift();
// const nums = input.map((v) => v.split(" "));
// nums.forEach((z) => {
//   console.log(lcm(z[0], z[1]));
// });
// --------------- 시간초과2 ---------------

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let testCase = input.shift();

for (let i = 0; i < testCase; i++) {
  // console.log(input[i]);
  let nums = input[i].split(" ").map((v) => Number(v));
  console.log(lcm(...nums));
}

//  반례추가 45000 44999 : return 2024955000 나와서 시간초과??
// 테스트 케이스를 빼고 돌리라고 한다. -> 해결
