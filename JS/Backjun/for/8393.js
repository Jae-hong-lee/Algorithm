// 합
// https://www.acmicpc.net/problem/8393

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const a = parseInt(input[0])
let answer = 0
for (let i = 1; i <= a; i++) {
    answer = answer + i
  
    console.log(answer)
}