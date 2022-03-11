// A+B - 4
// https://www.acmicpc.net/problem/10951

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let i =0;
console.log(input)
while (i < input.length-1) {
    let a = input[i].split(' ');
    console.log(a)
    i++;
    console.log(i)
    console.log(+a[0]+ +a[1])
}


// while (true) {
//     let a = input[i].split(' ')[0]
//     let b = input[i].split(' ')[1]
//     i++
//     // console.log(a+b)
//     if (a== undefined || b== undefined) {
//         break;
//     } else{
//         console.log(a+b);
//     }
// }