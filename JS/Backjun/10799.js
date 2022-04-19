// 쇠막대기
// https://www.acmicpc.net/problem/10799

// 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된다.
//  또한, 모든 ‘( ) ’는 반드시 레이저를 표현한다.
// 쇠막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현된다. 

// 스택, 구현
// 레이저 인가? 파이프 끝인가? : 닫는 괄호가 나타났을떄 앞에 문자가 열린괄호면 레이져
// 어찌보면 괄호개수구하기랑 비슷하다??
// 문제이해가 어려웠음 -> 노션 정리

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const S = input[0]

let stack  = []; // 레이져에 짤리면 -> 스택에 있는 열린괄호 카운터 추가 (*스택초기화는 어디서?? : 파이프 끝)
let count = 0; // 파이프갯수 세기
for (let i = 0; i < S.length; i++) {
    if (S[i] == '(') {
        stack.push(S[i]);
    }else{ 
        stack.pop() // 닫힌괄호가 나왔따는건 레이져 아니면 파이프 마지막이니까 -1
        if (S[i-1] == '(') { // 레이져
            count += stack.length;
        }else{
            count++
        }
    }
}
console.log(count)
// 레이져일때 스택값 뺴기, 레이져 아닐떄는?? 
// 파이프에 끝이란 소리. 그때 얼마를 추가시켜줘야하나??  = (+1)
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// const S = input[0]

// let stack  = []; // 레이져에 짤리면 -> 스택에 있는 열린괄호 카운터 추가 (*스택초기화는 어디서?? : 파이프 끝)
// let count = 0; // 파이프갯수 세기
// for (let i = 0; i < S.length; i++) {
//     if (S[i] == '(') {
//         stack.push(S[i]);
//     }else{ // ')' 닫힌 괄호일때 

//         if (S[i-1] == '(') { // 레이져 - 전에 값이 열린괄호니까.
//             count += stack.length;}
//         // else{ // 레이져 아닐때 조건은??

//         // }
//     }
// }
