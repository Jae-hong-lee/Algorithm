// 후위 표기식2
// https://www.acmicpc.net/problem/1935

// 첫쨰줄에는 피연산자의 개수
// 둘쨰줄에는 후위표기식 (피연산자 뒤에 연산자가 오는 방식)
// N만큼의 알파벳순서대로 나온다.
// 셋째줄부터 N+2번째 줄까지 파연산자에 대응하는 값이 주어짐 (100보다 작거나 같은 자연수)
//  -20억보다 크거나 같고, 20억보다 작거나 같은 입력만 주어진다.
// 계산 결과를 소숫점 둘째 자리까지 출력한다.

// 스택활용문제이다.
// N만큼의 스택을 만들고 N의 순서를 정해서 A-Z 알파벳판별??
// 스택이 많아지면 시간초과가 나오지 않을까 생각이듬.
// 후위표기식 연산
// https://woochan-autobiography.tistory.com/788?category=507807
// https://raw.githubusercontent.com/Hong-been/Algorithm-study/master/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/b1935.js
// 4 제출
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])
const operator = input[1];

let number = []
for (let i = 0; i < N; i++) {
    number.push(input[i+2])
}
let stack = [] 
for (let i = 0; i < operator.length; i++) {
    let x = operator.charCodeAt(i)
    if (x >= 65 && x <= 90) {
        let idx = Number(x) -65;
        stack.push(number[idx])
    }else{
        let A = Number(stack.pop())
        let C = Number(stack.pop())
        let b = operator[i]

        stack.push(oper(A,b,C))
    }
}
console.log(Number(stack.join('')).toFixed(2))

function oper(A,b,C) {
    let key = b
    let stack = 0
    switch (key) {
        case '+':
            stack = A + C
            break;
        case '-':
            stack = C - A
            break;
        case '*':
            stack = C * A
            break;
        case '/':
            stack = C / A
            break;
    }
    return stack
}


// 3 정리 
// 후위 표기식은 무조건 뒤에 식이 존재하기 마련임.
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])
const operator = input[1];

let number = []
for (let i = 0; i < N; i++) {
    number.push(input[i+2])
}
let stack = [] // 스택 길이나 number 배열의 길이는 N과 똑같다.
// 스택에 값을 넣을때 아스키 코드로 변경된 값을 변환하여 알파벳으로 만들고 그 알파벳의 index로 number에서 알맞은 숫자 찾아서 스택에 쌓기.
for (let i = 0; i < operator.length; i++) {
    let x = operator.charCodeAt(i)
    if (x >= 65 && x <= 90) {
        let idx = Number(x) -65;
        stack.push(number[idx])
        // stack.push(x)
    }else{
        let A = Number(stack.pop())
        let C = Number(stack.pop())
        let b = operator[i]

        stack.push(oper(A,b,C))
    }
    // console.log(stack)
}
console.log(Number(stack.join('')).toFixed(2))
// 소수점 출력 toFixed


// 2 
// 알파벳을 아스키코드로 변환한다. 그 다음 판별은?
// https://opentutorials.org/course/50/87
// 일단 숫자를 number라는 배열에 담았다.
// 질문하기 보니까 숫자가 두자리 일때도 생각해야한다.

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0])
// // const operator = input[1].split('');
// const operator = input[1];
// // console.log(N)
// // console.log(operator)

// let number = []
// for (let i = 0; i < N; i++) {
//     number.push(input[i+2])
// }
// // console.log(number)
// // console.log(charCodeAt(operator[0]))
// // console.log(operator.charCodeAt(0)+ "+++")
// // 배열로 지정되어 있으면 아스키코드로 변환되지 않았다. , 연산자도 아스키코드가능.
// // A = 65, Z = 90
// let stack = []
// for (let i = 0; i < operator.length; i++) {
//     let x = operator.charCodeAt(i)
//     // console.log(x)
//     if (x >= 65 && x <= 90) {
//         stack.push(x)
//     }else{
//         let A = stack.pop()
//         let C = stack.pop()
//         let b = x
//         stack.push(oper(A,b,C))
//         // 값 꺼내고 변수 지정해서 계산 함수(oper)로 들어가고 나온 값은 다시 스택으로 들어가기.
//         // 그 후 다시 For Loop 
//         // 알파벳에 값을 할당해야함 numbers에 들어있는 값 순서대로 A~

//     }
// }
// console.log(stack)




// 처음 생각
// 알파벳 만나면 스택에 넣고 기호 만나면 pop pop 으로 뺴서 oper 함수에 넣어서 switch case로 계산해서 stack에 값 넣기?
// ABC* -> stack =A      C B  -> B*C
// 알파벳을 어떻게 수로 할당할것인가.
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const N = parseInt(input[0])
// const operator = input[1].split('');
// console.log(N)
// console.log(operator)

// let number = []
// for (let k = 1; k <= N; k++) {
//     number.push(k)
// }
// console.log(number)
// let stack =[]
// for (let i = 0; i < N; i++) {
//     if(operator[i]=='A') {
//         stack.push[]
//     }
// }

// const arr = Array.from({N}, () => 0) xxxxx

// 계산식 함수. ok;
function oper(A,b,C) {
    let key = b
    let stack = 0
    switch (key) {
        case '+':
            stack = A + C
            break;
        case '-':
            stack = C - A
            break;
        case '*':
            stack = C * A
            break;
        case '/':
            stack = C / A
            break;
    }
    return stack
}