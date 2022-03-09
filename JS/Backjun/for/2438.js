// 별 찍기 - 1
// https://www.acmicpc.net/problem/2438


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])
let star = ''
for (let i = 1; i <= N; i++) {
   star += '*'
   console.log(star)
}


// 다른 풀이
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])

// let star = ''
for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(+i))
    
}