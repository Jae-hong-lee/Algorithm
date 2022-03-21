// 평균
// https://www.acmicpc.net/problem/1546

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0]; 
const score = input[1].split(' ');
const Max = Math.max(...score);

let answer = 0
for (let j = 0; j < score.length; j++) {
    answer = (score[j]/Max*100) + answer
}
console.log(answer / N)

// 수도코드
// Max 값 구하고 score에 점수를 다 담고 score[?] / Max *100 해서
// answer에 담고 N이랑 나눠서 출력하자.

// let answer = []
// for (let i = 1; i <= N; i++) {
//     let score = input[i].split(' ');
//     console.log(score)
//     // let Max = Math.max(...score);
//     // for (let j = 0; j < score.length; j++) {
//     //     answer.push(score[j])
        
//     // } // 입력값에서 오류가남.
// }
// console.log(answer) 