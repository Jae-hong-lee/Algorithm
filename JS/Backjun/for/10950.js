// A + B - 3
// https://www.acmicpc.net/problem/10950


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = parseInt(input[0])

for (let i = 1; i <= T; i++) {
    const a = input[i].split(' ')
    // Number(a)
    console.log(+a[0] + +a[1])
}
