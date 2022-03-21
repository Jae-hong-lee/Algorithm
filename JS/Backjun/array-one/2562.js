// 최댓값
// https://www.acmicpc.net/problem/2562

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let cnt =1
let max = Math.max(...input)
for (let i = 0; i < input.length; i++) {
    let num = input[i]
    if (max == num) {
        console.log(num , cnt)
    }
    cnt +=1
}