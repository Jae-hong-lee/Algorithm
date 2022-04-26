// 후위 표기식
// https://www.acmicpc.net/problem/1918

// 첫째 줄에 중위 표기식, 피연산자는 알파벳 대문자. 수식에서 한번 씩만 등장, 무조건 후위 표기식으로 주어진다.
// 표기식은 알파벳 대문자와 +, -, *, /, (, )로만 이루어져 있으며, 길이는 100을 넘지 않는다.

// 수학식의 우선순위를 잘 생각해야한다.
// 괄호가 나온다면 괄호안의 알파벳부터 후위 표기식으로 정렬해줘야한다, 길이도 100이 넘지 않기 떄문에 for Loop 돌려도 가능할듯.
// 괄호 판별 문제 참고해서 스택에 넣고 괄호가 있다면 그안에 있는 수를 제거하는게 아닌 계산 함수로 들어가서 값을 계산하고
// 나와서 다시 스택에 추가된다. <- 반복한다. (while)
// 주의점: 값을 연산하는게 아닌 중위표기식을 -> 후위표기식으로 변경하는 것임.
// for문 말고 while 루프로 돌려서 빠져나오는 방법을 구해야할듯.
// * / 
// 1
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split(" ");
// const word = input[0]
// console.log(word)
// while
// if(* /)
// + -
// 스택에 추가 기호가 나오면 뒤쪽에 있는 값을 확인하고 ( 이면 ) 이 나올떄까지의 값들을 스택에 추가.
// 이후 기호를 뒤에 추가.
// let answer = []
// let stack = []
// for (let i = 0; i < word.length; i++) {
    // if ( word[i]=== '(') {
        
//     }
// }

//2 틀렸따. 예제 4번 : AB+C*D-E/ 값이 잘못나옴. 단순 오타 였음
// while문은 ans 에 쌓아주는 정답을 구해주는 식이라고 생각하면 편하다.
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const word = input[0]
// console.log(word)
let stack = []
let ans = []
for (let i = 0; i < word.length; i++) {
    // 알파벳이라면 ans에 그대로 쌓기.
    if (word[i] >= 'A' && word[i] <='Z') {
        ans.push(word[i])
    } else if (word[i] === "(") {
        // 열린괄호라면 stack에 쌓아두기
        stack.push(word[i])
    } else if (word[i] ===')') {
        // 닫힌 괄호라면 스택이 비어있지 않고 스택 끝부분이 열린괄호 일때까지 pop하는데 pop한 건 ans에 쌓기.
        while (stack.length && stack[stack.length -1] !== "(") {
            ans.push(stack.pop())
        }
        // 열린괄호전까지 팝했기 때문에 열린괄호를 빼내주기 위해 pop! : 열린괄호 지우기
        stack.pop()
    }

    else if (word[i]==='*' || word[i]==='/') {
        // stack의 마지막값이 *, / 일때까지 팝해서 ans에 쌓아준다
        while (stack.length && stack[stack.length -1] === "*"
        || stack[stack.length-1] === "/") {
            ans.push(stack.pop())
        }
        stack.push(word[i])
    }   

    else if (word[i]==='+' || word[i]==='-'){
        // 우선순위가 제일 낮기 때문에 )가 들어왔을때랑 같게 처리하는데 마지막에 값을 팝해서 지워주는게 아닌 푸쉬로 쌓아줌
        while (stack.length && stack[stack.length - 1] !== "(") {
            ans.push(stack.pop());
          }
          stack.push(word[i]);
    }

}
while (stack.length) {
    // 쌓아 왔던 기호만 들어있는 스택을 ans에 붙여주기!
    // pop은 뒤에서 부터 값을 빼냄!
    ans.push(stack.pop())
    
}
console.log(ans.join(''))
