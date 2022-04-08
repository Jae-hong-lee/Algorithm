// 단어 뒤집기2
// https://www.acmicpc.net/problem/17413

// 알파벳 소문자('a'-'z'), 숫자('0'-'9'), 공백(' '), 특수 문자('<', '>')로만 이루어져 있다.
// 문자열의 시작과 끝은 공백이 아니다.
// '<'와 '>'가 문자열에 있는 경우 번갈아가면서 등장하며, '<'이 먼저 등장한다. 또, 두 문자의 개수는 같다.


// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const a = input[0]

// let answer = [];
// let stack = [];
// const char = ['<', '>'];

// const word = a.split(/[' ' | < | >]/)
// // 2. 정규 표현식으로 < > 괄호를 기준으로 짤라서 문자열을 뒤집어봄;
// for (const key of word) {
//     let rev = key.split('').reverse().join('')
//     stack.push(rev)
// }
// // console.log(word)
// console.log(stack.join(' ').trim())
// 1. 문자열 뒤집기 까지는 성공 이제 괄호가 나오면 괄호안에 있는 
// 문자열은 제외시키는 조건이 필요하다.
// < 이 먼저 등장하니까 < 등장 순간부터 > 등장까지의 문자열은 제외한다.
// 그 후에 뒤집기로 들어가게 만든다.


// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// let a = input[0];

// let stack = [];
// let stack2 = [];
// let tmep = a;
// for (let i = 0; i < a.length; i++) {
//     // stack.push(a[i])
//     if (a[i] === '<') {
//         stack.push(tmep.slice(i, tmep.indexOf('>')+1));
//         i = tmep.indexOf('>');
//         tmep = tmep.slice(i+1);
//     } else{
//         stack2.push(a[i])
//     }
//     // answer.push(stack + stack2.reverse().join(''))
// }
// console.log(stack)
// console.log(stack2)
// 스택 2개로 <> 괄호안에 있는 문자열과 그렇지 않은 문자열은 돌려서 
// 출력은 성공 근데 합치는 부분은>???



const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let a = input[0];
// console.log(a)

let stack = [];
let stack2 = [];
let answer = [];
for (let i = 0; i <= a.length; i++) {
    if (a[i] === '<') {
        answer += stack2.reverse().join('')
        stack2 = []
        let count = i
        while (a[count] !== '>') {
            stack.push(a[count])
            count++
        }
        stack.push(a[count])
        i = count-1
        // < 일때 > 까지 while로 stack에 쌓고 마지막에 > 까지 추가하고 i를 count로 바꿔서
        // 괄호 안에 있는 문자열은 건너뛰게 만듬 -1 하는 이유는 for문 돌면서 i++이 되기 떄문에
        // 순서가 꼬일 수 있음.
    }
    else if(a[i] === '>'){ 
        answer += stack.join('')
        stack =[]
        // 보통 열린괄호 돌고 바로 돌아가는 조건문. 
        // while로 쌓았던 stack을 answer에 집어넣고 stack 초기화
    }
    else if(a[i] === ' ' | a[i]=== undefined){
        // undefined 추가
        answer += stack2.reverse().join('') +' '
        stack2 = []
        // ever problem -> melborp reve 이것떔에 빈칸부분을 추가하게됨.
        // else에서 stack2를 쌓다가 빈칸이나 undifind를 만나면 들어오게됨
        // stack2에 쌓여 있던거 돌려서 추가하고 띄어쓰기 추가해줌-> stack2 초기화
    }
    else{
        stack2.push(a[i])
    }
    // stack2에 괄호 안에 아닌 문자열 쌓기ㅣ잉이잉잉
    // 추가는 위에 조건에서 하게 되어 있다.
}
// console.log(stack)
// console.log(stack2)
console.log(answer)
// <int><max>2147483647<long long><max>9223372036854775807
// 뒤에 숫자 안나옴


// 제출용
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let a = input[0];

let stack = [];
let stack2 = [];
let answer = [];
for (let i = 0; i <= a.length; i++) {
    if (a[i] === '<') {
        answer += stack2.reverse().join('')
        stack2 = []
        let count = i
        while (a[count] !== '>') {
            stack.push(a[count])
            count++
        }
        stack.push(a[count])
        i = count-1
    }
    else if(a[i] === '>'){
        answer += stack.join('')
        stack =[]
    }
    else if(a[i] === ' ' | a[i]=== undefined){
        answer += stack2.reverse().join('') +' '
        stack2 = []
    }
    else{
        stack2.push(a[i])
    }
}
console.log(answer)