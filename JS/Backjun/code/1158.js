// 요세푸스 문제
// https://www.acmicpc.net/problem/1158

// 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 
// 이제 순서대로 K번째 사람을 제거한다.한 사람이 제거되면 
// 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
// 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.
// 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다.

// 요세푸스 공장(?) 파이썬식.
// https://velog.io/@delicate1290/%EB%B0%B1%EC%A4%80-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4-%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C-1158%EB%B2%88

// 큐에 3이라는 제한을 두고? 3에 해당하는 값 지우고 
// 큐 초기화 -> 다시 쌓고 3이면 값 지우고 초기화 반복??
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ");
// const N = parseInt(input[0])
// const K = parseInt(input[1])
// // console.log(N,K)
// const answer = [];
// const queue = [];
// // let temp = []
// for (let i = 0; i < N; i++) {
//     queue.push(i+1)
// }
// // console.log(queue) // queue에 N까지의 수 저장.
// let count = 1
// // 큐에 있는 숫자가 없을때까지 반복
// // while에 안들어기지냐;;;
// // while (queue.length <= 0) 
// while (queue){
//     let num = queue.shift();
//     // shift를 하는순간 값이 하나가 빠짐.
//     if (count === K) {
//         answer.push(num)
//         count = 0
//     }else{
//         queue.push(num)
//     }
//     count++
// }
// console.log(answer)

// 시간초과;


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const N = parseInt(input[0]);
const K = parseInt(input[1]);
const answer = [];
const queue = [];
console.log(N,K)
for (let i = 0; i < N; i++) {
    queue.push(i+1);
}

let count = 1;
while (queue.length>0){
    let num = queue.shift();
    if (count === K) {
        answer.push(num);
        count = 0;
    }else{
        queue.push(num);
    }
    count++
}
console.log(`<${answer.join(", ")}>`);
// 틀림 ㅠ 왜??


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const N = parseInt(input[0]);
const K = parseInt(input[1]);
const answer = [];
const queue = Array.from({length: N}, (v,i) => i+1);
// console.log(queue)
while (queue.length > 0) {
    for (let i = 1; i < K; i++) {
        const num = queue.shift();
        queue.push(num)
    }
    const num = queue.shift();
    answer.push(num)
}
console.log(`<${answer.join(", ")}>`)