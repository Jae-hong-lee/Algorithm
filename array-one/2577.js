// 숫자의 개수
// https://www.acmicpc.net/problem/2577

// 정답
// 굳이 sum 곱할때 for문 통해서 곱할 필요 없었음.
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const list = [0,1,2,3,4,5,6,7,8,9]
let sum = input[0]* input[1] * input[2]
// console.log(sum)
sum = String(sum)
let arr = sum.split('')
// console.log(arr)

for (let j = 0; j < list.length; j++) {
    let y = String(list[j])
    // console.log(y)  
    // console.log(typeof(y))  
    let x = arr.filter(v => v === y)
    console.log(x.length)
    // answer.push(x.length)
}
// console.log(answer)

// 제출 -> 틀림
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const list = [0,1,2,3,4,5,6,7,8,9]
// let sum = 1

// for (let i = 0; i < input.length; i++) {
//     sum = input[i]*sum
// }

// sum = String(sum)
// let arr = sum.split('')
// let answer = []

// for (let j = 0; j < list.length; j++) {
//     let y = list[j]
//     let x = arr.filter(v => v == y)
//     console.log(x.length)
//     // answer.push(x.length)
// }
// console.log(answer)
// console.log(answer.join('\n'))



// 풀이
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// let list = [0,1,2,3,4,5,6,7,8,9]
// let sum = 1
// for (let i = 0; i < input.length; i++) {
//     sum = input[i]*sum
// }
// sum = String(sum)
// // console.log(sum)
// let arr = sum.split('')
// // console.log(arr)
// let answer = []
// for (let j = 0; j < list.length; j++) {
//     let y = list[j]
//     let x = arr.filter(v => v==y)
//     answer.push(x.length)
// }
// console.log(answer.join('\n'))