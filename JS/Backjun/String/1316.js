// 그룹 단어 체커
// https://www.acmicpc.net/problem/1316

// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말함
// aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
// 첫째 줄에 단어의 개수 N이 들어온다.
// 단어는 알파벳 소문자로만 되어있고 중복되지 않음

// input =word 로 수정하기
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = input[0];
let answer = 0
for (let i = 1; i <= N; i++) {
    // 단어체크
    let word = input[i]
    let stack = []
    // console.log(word.length)
    for (let j = 0; j < word.length; j++) {
        // console.log(word[j])
        // 문자체크
        if (!stack.includes(word[j])) {
            stack.push(word[j])
        }
        else if (word[j-1]===word[j]){
            stack.push(word[j])
        }
        
    }
    // console.log(stack.join(''))
    if (word === stack.join("")) {
        answer++
    }

}
console.log(answer)








// const N = input[0]
// let notanswer = 0
// let answer = 0
// for (let i = 1; i <= N; i++) {
//     console.log(input[i])
//     let stack = [];
//     // console.log(input[i].length)
//     for (let j = 0; j < input[i].length; j++) {
//         if (!input[i].includes(input[i][j])) {
//             stack.push(input[i][j])
//         }
//         else if (input[i][j-1] === input[i][j]) {
//             stack.push(input[i][j])
//         }
//         else{
//             notanswer++
//             break;
//         }
//     }
//     console.log(stack)
//     // 스택에 쌓이질 않음.
//     if (input[i] === stack.join("")) {
//         answer++
//     }

// }


// 아스키 코드로 풀려고 했다가 실패했음. 풀이오류 (수도코드가 사라졌다.)
// 조건을 잘 생각할 필요가 있다. includes를 사용해서 그 문자가 단어에 하나일때 stack에 추가
// input 앞뒤 글자가 같다면 추가
// 아니라면 break;

// let stack = []
// let answer = 0

// for (let i = 1; i <= N; i++) {
//     stack = new Array(26).fill(true);
//     for (let j = 0; j < input[i].length - 1 ; j++) {
//         if (input[i][j]===input[i][j+1]) {
//             // 같으면 넘기기.
//             continue
//         }else { // 다를때
//             if (stack[input[i][j].charCodeAt()-97]) {
//                 answer+=1
//                 break;
//             }
//             stack[input[i][j].charCodeAt()-97] = false
//         }
        
//     }
// }
// console.log(answer)