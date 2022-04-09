// 오큰수
// https://www.acmicpc.net/problem/17298

// Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 
// 그러한 수가 없는 경우에 오큰수는 -1

// 기준 숫자 A[0] 이라고 치면 오른쪽으로 이동하는데 (A[1,A[2]...])
// 자기보다 큰수가 나오면 그 수 출력
// 없다면 -1

// 처음생각
// 괄호 뒤집기랑 비슷하다고 본다. -> 닫힌괄호대신 오른쪽에 있는 큰수이니끼
// while 을 통해서 A 에 있는 모든 값들을 A[0]이랑 비교해야함.

// 배열크기가 너무 크다보니까 2중 반복문으로 풀 수가 없었다..
// 다른사람 블로그 참고. https://hooongs.tistory.com/329
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])
let A = input[1].split(' ').map(Number);
const arr = Array(N).fill(-1);
// console.log(N, A)
// console.log(arr)
const stack = []
for (let i = 0; i < N; i++) {
    while (stack.length >0 && stack[stack.length-1][0] < A[i]) {
        let [value, key] = stack.pop();
        arr[key] = A[i]
    }
    stack.push([A[i],i])
}
console.log(arr)




// 배열 크기가 최대 100만이라 2중 반복문을 쓰면 무리라고한다.
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0])
// let A = input[1].split(' ').map(Number);
// let answer = [];

// while (A.length >0) {
//     // let now = A.pop(A.length-1)
//     let now = A.shift()
//     let num = -1
//     for(let i =0; i < A.length; i++){
//         if (A[i] > now) {
//             num = A[i];
//             break;
//         }
//     }
//     answer.push(num)
// }
// console.log(answer)






// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0])
// const A = input[1].split(' ').map(Number);
// // console.log(A)

// // console.log(Math.max(...A))
// let count = 0;
// let stack = [];
// if (A[0]=== Math.max(...A)) {
//     stack.push(-1);
// } 

// while (count < N) {
//     for (let i = count; i < N; i++) {
//         if (A[count] < A[i]) {
//             stack.push(A[i]);
//             break;
//         }
//     }
//     count++
// } 
// stack.push(-1)

// console.log(stack.join(' '))


// 두번째 예제 처음 숫자가 가장 클때오류
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0])
// const A = input[1].split(' ')
// console.log(A)

// let count = 0;
// let stack = [];
// while (count < N) {
//     for (let i = count; i < N; i++) {
//         if (A[count] < A[i]) {
//             stack.push(A[i]);
//             break;
//         }
//     }
//     count++
// }
// stack.push('-1')
// console.log(stack)



// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0])
// const A = input[1].split(' ')

// let stack = [+A[0]]
// let answer = []
// console.log(stack)
// for (let i = 1; i < N; i++) {
//     if (+A[i] > stack[stack.length-1] ) {
//         answer.push(A[i])
//         stack.push(+A[i])
//     }else if(+A[i] <= stack[stack.length-1] & i == N-1) {
//         answer.push('-1')
//     }
//     else{
//         continue
//     }
// }
// console.log(stack)
// console.log(answer)
// [ 3, 5, 7 ]
// [ '5', '7' ]