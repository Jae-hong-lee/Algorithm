// 두 수 비교하기
// https://www.acmicpc.net/problem/1330


const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('JS/Backjun/input.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a>b) {
    console.log('>');    
}else if (a<b) {
    console.log('<');
}else{
    console.log('==')
}