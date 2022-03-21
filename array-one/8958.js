// OX퀴즈
// https://www.acmicpc.net/problem/8958

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = +input[0];

let answer = []
for (let i = 1; i <= T; i++) {
    let A = input[i]
    cnt = 1
    for (let j = 0; j < A.length; j++){
        // A를 돌면서 OX 판별하기.
        // 점수를 어뜨케 저장하고 더할것인가??
        if ('O' === A[j]) {
            answer.push(cnt)
        }
        else if ('X' === A[j]){
            cnt = 0;
        }

    }
    
}
