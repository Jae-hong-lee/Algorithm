// 기찍 N
// https://www.acmicpc.net/problem/2742

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])
let answer = []
for (let i = 1; i <= N; i++) {
    // console.log(i)
    answer.push(i)

}
answer.reverse()
console.log(answer.join('\n'))