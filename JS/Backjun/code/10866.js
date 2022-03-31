// 덱
// https://www.acmicpc.net/problem/10866

// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 
    // 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 
    // 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 
    // 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 
    // 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// 문제에서 deque를 쓰라고 알려주기까지한다. shift를 잘 활용해야겠다
// -> 문제는 스택과 큐에서 풀어봤듯이 조건에 맞추어 구현하는 문제였음 이것보다 커서 위치찾는게 더어려웟다;

// 문제풀이
// input[i]번째 값을 공백을 기준으로 나누었을 때, 길이가 1개인 경우, 
// pop_front, pop_back, size등 주어진 명령어에 맞게 answer값을 넣어주었고, 

// 길이가 2인 경우, 공백을 기준으로 나눈 배열의 0번째 값이 push_front이면, unshift함수로 값을 넣어주고,
// push_back이면, 1번째 인덱스 값을 deque에 push해주었습니다.

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0])

// let deque = []
// // const deque = [1,2,3,4]
// let answer = []

// for (let i = 1; i <= N; i++) {
//     const arr = input[i].split(' ');
//     // console.log(arr)
//     // console.log(deque.shift())
//     // 길이가 1인 경우 명렁어.
//     if (arr.length === 1) {
//         if (arr[0]==='size') {
//             answer += deque.length;
//         }else if (arr[0] === 'empty') {
//             if (deque.length === 0 ) {
//                 answer += '1\n';
//             }else{
//                 answer += '0\n';
//             }
//         }

//         else if (arr[0] === 'front') {
//             if (deque.length === 0) {
//                 answer += '-1\n'
//             }else{
//                 answer += deque[0]+ '\n';
//             }
//         }

//         else if (arr[0]==='back') {
//             if (deque.length === 0) {
//                 answer += '-1\n'
//             }else{
//                 // answer += deque[-1]
//                 answer += deque[deque.length-1]+ '\n';
//             }
//         }

//         else if (arr[0]==='pop_front') {
//             if (deque.length === 0) {
//                 answer += '-1\n'
//             }else{
//                 answer += deque.shift()+ '\n';
//             }
//         }

//         else if (arr[0]==='pop_back') {
//             if (deque.length === 0) {
//                 answer += '-1\n'
//             }else{
//                 answer += deque.pop()+ '\n';
//             }
//         }

//     }
//     // 길이가 2인 경우
//     else{
//         if (arr[0]==='push_front') {
//             deque.unshift(arr[1]);
//             // + '\n';
//         }else{
//             // push_back
//             deque.push(arr[1]);
//         }
//     }
// }
// // console.log(answer.split(''));
// console.log(answer)
// // 한줄로 출력하기 저번에 했었는데;



// =========================== 제출용
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])

let deque = []
let answer = []

for (let i = 1; i <= N; i++) {
    const arr = input[i].split(' ');
    if (arr.length === 1) {
        if (arr[0]==='size') {
            answer += deque.length+ '\n';
        }else if (arr[0] === 'empty') {
            if (deque.length === 0 ) {
                answer += '1' + '\n';
            }else{
                answer += '0'+ '\n';
            }
        }

        else if (arr[0] === 'front') {
            if (deque.length === 0) {
                answer += '-1'+ '\n'
            }else{
                answer += deque[0]+ '\n';
            }
        }
        else if (arr[0]==='back') {
            if (deque.length === 0) {
                answer += '-1'+ '\n'
            }else{
                answer += deque[deque.length-1]+ '\n';
            }
        }
        else if (arr[0]==='pop_front') {
            if (deque.length === 0) {
                answer += '-1'+ '\n'
            }else{
                answer += deque.shift()+ '\n';
            }
        }
        else if (arr[0]==='pop_back') {
            if (deque.length === 0) {
                answer += '-1'+ '\n'
            }else{
                answer += deque.pop()+ '\n';
            }
        }
    }
    else{
        if (arr[0]==='push_front') {
            deque.unshift(arr[1]);
        }else{
            deque.push(arr[1]);
        }
    }
}
console.log(answer)

// 21
// 
// 2 1  2   0