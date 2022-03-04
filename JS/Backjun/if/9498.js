// 시험성적
// https://www.acmicpc.net/problem/9498


const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('JS/Backjun/input.txt').toString().split(' ');
const a = parseInt(input[0]);
// const b = parseInt(input[1]);
if (a>=90) {
    console.log('A');
} else if(a>=80) {
    console.log('B');
} else if(a>=70) {
    console.log('C');
} else if(a>=60) {
    console.log('D');
} else {
    console.log('F');
}