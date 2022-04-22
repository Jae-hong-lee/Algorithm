// 후위 표기식
// https://www.acmicpc.net/problem/1918

// 첫째 줄에 중위 표기식, 피연산자는 알파벳 대문자. 수식에서 한번 씩만 등장, 무조건 후위 표기식으로 주어진다.
// 표기식은 알파벳 대문자와 +, -, *, /, (, )로만 이루어져 있으며, 길이는 100을 넘지 않는다.

// 수학식의 우선순위를 잘 생각해야한다. 괄호가 나온다면 괄호안의 알파벳부터 후위 표기식으로 정렬해줘야한다, 길이도 100이 넘지 않기 떄문에 for Loop 돌려도 가능할듯.
// 괄호 판별 문제 참고해서 스택에 넣고 괄호가 있다면 그안에 있는 수를 제거하는게 아닌 계산 함수로 들어가서 값을 계산하고
// 나와서 다시 스택에 추가된다. <- 반복한다. 
// 주의점: 값을 연산하는게 아닌 중위표기식을 -> 후위표기식으로 변경하는 것임.


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const word = input[0]
console.log(word)

let stack = []
for (let i = 0; i < word.length; i++) {
    if ( word[i]=== '(') {
        
    }
}


// 계산함수.
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
