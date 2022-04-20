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

// 2 
// 알파벳을 아스키코드로 변환한다. 그 다음 판별은?
// https://opentutorials.org/course/50/87
// 일단 숫자를 number라는 배열에 담았다.
// 질문하기 보니까 숫자가 두자리 일때도 생각해야한다.
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = parseInt(input[0])
const operator = input[1].split('');
console.log(N)
console.log(operator)

let number = []
for (let i = 0; i < N; i++) {
    number.push(input[i+2])
}
console.log(number)




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
// function oper(A,b,C) {
//     let A = Number(A)
//     let key = b
//     let C = Number(C)   

//     switch (key) {
//         case '+':
//             stack.push(A+C)
//             break;
//         case '-':
//             stack.push(C-A)
//             break;
//         case '*':
//             stack.push(C*A)
//             break;
//         case '/':
//             stack.push(C/A)
//             break;
//     }
// }