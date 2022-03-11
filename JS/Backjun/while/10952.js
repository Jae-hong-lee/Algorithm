// A+B - 5
// https://www.acmicpc.net/problem/10952
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// console.log(input)
// 통과
let i =0;
while (true) {
    let a = +input[i].split(' ')[0]
    let b = +input[i].split(' ')[1]
    i++
    if (a==0 || b==0) {
        break;
    } else{
        console.log(a+b);
    }
}




// 틀림
// let i =0
// while (i < input.length-1) {
//     let a = +input[i].split(' ')[0]
//     let b = +input[i].split(' ')[1]
//     i++
//     console.log(a+b)
// }
// console.log(a,b)