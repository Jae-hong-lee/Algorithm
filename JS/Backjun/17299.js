// 오등큰수
// https://www.acmicpc.net/problem/17299

// Ai가 수열 A에서 등장한 횟수를 F(Ai)라고 했을 때,
//  Ai의 오등큰수는 오른쪽에 있으면서 수열 A에서 등장한 횟수가 
//  F(Ai)보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 
// 그러한 수가 없는 경우에 오등큰수는 -1이다.

// F(A3=2) < F(A7=1) 이기 때문에, 
// NGF(3) = 1이다. NGF(4) = 2, NGF(5) = 2, NGF(6) = 1 이다.

// 생각 띵킹.
// 가장큰수를 구하는 것이 아닌 가장 많이 나온 수를 구하는 문제
// 가장 많이 나온 거는 -1 
// 그렇지 않은거는 가장 많이 온 수 - 그 숫자 나온 횟수 를 추가. (answer에)

// 스택을 이용 => 단어공부 1157번 참고해서 풀어볼만한듯?? 인덱스값을 잘 생각.
// 일단 배열안에 숫자들이 얼만큼 등장했는지는 알아야한다.


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0]);
let ngf = input[1].split(' ').map(Number);
const answer = Array(N).fill(-1)

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in
const counter = {};
for (let c in ngf) {
    if (!counter[ngf[c]]) {
        counter[ngf[c]] =1;
    }else{
        counter[ngf[c]]++
    }
}

let stack = [];
for (let i = 0; i < N; i++) {
    while (stack.length > 0 && counter[ngf[stack[stack.length-1]]] < counter[ngf[i]]) {
        answer[stack.pop()] = ngf[i]
    }
    stack.push(i)
}
console.log(answer.join(' '))


// 실패 : 카운터를 객체로 만들어야 통과할거 같다.
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0]);
// let ngf = input[1].split(' ').map(Number);
// const answer = Array(N).fill(-1)

// const counter = [];
// for (let x of ngf) {
//     counter.push(ngf.filter(i => x === i).length)
// } 

// let stack = [];
// for (let i = 0; i < N; i++) {
//     while (stack.length > 0 && counter[ngf[stack[stack.length-1]]] < counter[ngf[i]]) {
//         answer[stack.pop()] = ngf[i]
//     }
//     stack.push(i)
// }
// console.log(answer.join(' '))

// https://msiqoc.tistory.com/9
    // while (stack.length > 0) {
    //     if (counter[ngf[i]] >= counter[stack[stack.length-1]]) {
    //         stack.pop()
    //     }else{
    //         break;
    //     }
    // }


//시간초과
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0]);
// let ngf = input[1].split(' ').map(Number);

// const counter = [];
// for (let x of ngf) {
//     counter.push(ngf.filter(i => x === i).length)
// } // 필터 함수 활용
// // https://hianna.tistory.com/488
// // console.log(counter)

// const max = Math.max(...counter);
// let answer = []
// for (let i = 0; i < N; i++) {
//     if (counter[i] == max) {
//         answer.push(-1)
//     }else{
//         answer.push(max-counter[i])
//     }
// }
// console.log(answer.join(' '))

// 메모리 초과
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0]);
// let ngf = input[1].split(' ');

// let number = new Set(ngf);
// number = [...number];
// let counter  = []
// for (let i = 0; i < number.length; i++) {
//     let text = ngf.join('')
//     let Char = number[i]
//     let count = 0
//     let pos = text.indexOf(Char)
//     while (pos !== -1) {
//         count++
//         pos = text.indexOf(Char, pos +1);
//     }
//     counter.push(count);
// }

// let max = Math.max(...counter);
// let answer = []
// for (let i = 0; i < ngf.length; i++) {
//     x = number.indexOf(ngf[i])
//     if (counter[x] == max) {
//         answer.push(-1)
//     }else{
//         answer.push(max-counter[x])
//     }
// }
// console.log(answer)





// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0]);
// let ngf = input[1].split(' ');
// // .map((x)=>+x);
// // console.log(typeof(ngf[0])) // number
// let number = new Set(ngf);
// number = [...number];
// let counter  = []
// for (let i = 0; i < number.length; i++) {
//     let text = ngf.join('')
//     let Char = number[i]
//     let count = 0
//     let pos = text.indexOf(Char)
//     while (pos !== -1) {
//         count++
//         pos = text.indexOf(Char, pos +1);
//     }
//     counter.push(count);
// }
// // console.log(Math.max(...counter));
// // 숫자가 몇번 나오는지는 구현 완료!!! 4/13
// // 해야할거 -> max값 구해서 비교
// let max = Math.max(...counter);
// let answer = []
// for (let i = 0; i < ngf.length; i++) {
//     x = number.indexOf(ngf[i])
//     if (counter[x] == max) {
//         answer.push(-1)
//     }else{
//         answer.push(max-counter[x])
//     }
// }
// console.log(answer)





