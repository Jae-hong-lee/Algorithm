// 구구단
// https://www.acmicpc.net/problem/2739

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const a = parseInt(input[0])

for (let i = 1; i <= 9; i++) {
    console.log(a + ' * ' + i + ' = ' + (a*i))
}
// console.log(table.join(" "))