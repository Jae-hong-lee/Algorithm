// 나머지
// https://www.acmicpc.net/problem/3052

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let list = []
for (let i = 0; i < 10; i++) {
    let A = input[i];

    list.push(A%42);
}
let answer = [...new Set(list)]
console.log(answer.length)
// console.log(list)

// JS 배열에서 중복제거
// https://velog.io/@yunsungyang-omc/JS-%EB%B0%B0%EC%97%B4%EC%97%90%EC%84%9C-%EC%A4%91%EB%B3%B5-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0