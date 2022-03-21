// OX퀴즈
// https://www.acmicpc.net/problem/8958

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = +input[0];
let cnt = 0
for (let i = 1; i <= T; i++) {
    let A = input[i]
    // let stack = []
    let answer = []
    for (let j = 0; j < A.length; j++){
        // A를 돌면서 OX 판별하기.
        // 점수를 어뜨케 저장하고 더할것인가??
        // stack 에 쌓고 X가 나오면 O 갯수 answer에 담기?? or 마지막 길이 일때에도 stop
        // 점수 증가 X : Ture일 경우 카운트 증가 + answer에 담기
        // False이면 카운트 초기화 , 마지막에 reduce함수로 합산.
        if ('O' == A[j]) {
            cnt++
            answer.push(cnt)
        }else if ('X' == A[j]) {
            // stack = []
            cnt = 0
        }
    }
    cnt = 0
    // console.log(answer)
    
    answer = answer.reduce((x,y) => x+y,0);
    console.log(answer)    
}


// if ('O' === A[j]) {
//     answer.push(cnt)
// }
// else if ('X' === A[j]){
//     cnt = 0;
// }