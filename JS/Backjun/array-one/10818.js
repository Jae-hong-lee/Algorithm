// 10818번 최소, 최대
// https://www.acmicpc.net/problem/10818
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0]);
const num = input[1].split(' ').map(x => Number(x));

console.log(Math.min(...num), Math.max(...num))
// const answer = [Math.max(...num), Math.min(...num)]
// console.log(answer)
// console.log(Math.max(...num), Math.min(...num))