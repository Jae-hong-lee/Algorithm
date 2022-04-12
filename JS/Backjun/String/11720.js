// 숫자의 합
// https://www.acmicpc.net/problem/11720

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0]);
const num = input[1].split('');
let answer = 0

for (let i = 0; i < N; i++) {
    let number = +num[i]
    answer = answer + number
}

console.log(answer)