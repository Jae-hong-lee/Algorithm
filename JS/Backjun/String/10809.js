// 알파벳 찾기
// https://www.acmicpc.net/problem/10809

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0]);