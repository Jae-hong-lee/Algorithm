// 더하기 사이클
// https://www.acmicpc.net/problem/1110

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString();
let N = Number(input);
let count = 0;

while (true) {
    count++
    let sum = Math.floor(N/10)+N%10;
    N = (N%10) * 10 + sum %10;
    if (+input === N){
        break;
    }
}
console.log(count)
// 각 자리 수를 구하는 수식
// 1의 자리에 있는 수 구하기: num % 10
// 10의 자리에 있는 수 구하기: Math.floor(num / 10)
// 1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10



// https://eunne.tistory.com/22?category=1030229
// 배열로 풀려다 실패
// while (true) {
//     stack = []
//     let sum = +N[0]+ +N[1] // 10 number
//     let x = String(sum[1])+ N[1]
//     count++    
//     if (N == x) {
//         break
//     }
    
// }
// console.log(count)


// let a = String(Number(N[0])+Number(N[1]))
// stack = [N[1],a]
// let a = String(Number(N[0])+Number(N[1]))
// console.log(a[a.length-1])