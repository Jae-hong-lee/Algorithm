// 곱셈
// https://www.acmicpc.net/problem/2588

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('JS/Backjun/input.txt').toString().split('\n');
const a = parseInt(input[0]);
const b = input[1];


console.log(a*b[0]);
console.log(a*b[1]);
console.log(a*b[2]);
console.log(a*b);