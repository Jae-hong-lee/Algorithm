// 아스키 코드
// https://www.acmicpc.net/problem/11654

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const a = input[0]

console.log(a.charCodeAt())