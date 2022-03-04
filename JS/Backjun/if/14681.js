// 사분면 고르기
// https://www.acmicpc.net/problem/14681

// const fs = require('fs');
// // const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('JS/Backjun/input.txt').toString().split('\n');

// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// // console.log(a,b);

// if (a >0 && b >0){
//     console.log(1);
// }else if (a < 0 && b >0){
//     console.log(2);
// }else if (a <0 && b <0){
//     console.log(3);
// }else if (a > 0 && b <0){
//     console.log(4);
// }

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('JS/Backjun/input.txt').toString().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
// console.log(a,b);

if (a >0 && b >0){
    console.log(1);
}else if (a < 0 && b >0){
    console.log(2);
}else if (a <0 && b <0){
    console.log(3);
}else if (a > 0 && b <0){
    console.log(4);
}