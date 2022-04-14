// 문자열 반복
// https://www.acmicpc.net/problem/2675

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0]);
// console.log(N)
let answer = []
for (let i = 1; i <= N; i++) {
    let S = input[i].split(' ');

    function repeat(P) {
        return P.repeat(S[0])
    }

    for (let j = 0; j < S[1].length; j++) {
        // console.log(repeat(S[1][j]))
        answer.push(repeat(S[1][j]))
        // answer.push()
    }
    console.log(answer.join(''))   
    answer = []
}