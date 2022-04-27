// 문자열 분석
// https://www.acmicpc.net/problem/10820

// 문자열 N개가 주어짐. 문자열에 포함되어 있는 소문자, 대문자, 숫자, 공백의 개수를 구하는 로직 작성
// 소문자, 대문자, 숫자, 공백으로만 이루어짐
// 문자열의 길이는 100을 넘지 않는다.
// 첫째 줄부터 N번째 줄까지 각각의 문자열에 대해서 소문자, 대문자, 숫자, 공백의 개수를 공백으로 구분해 출력

// input
// This is String
// SPACE    1    SPACE
//  S a M p L e I n P u T     
// 0L1A2S3T4L5I6N7E8

// result
// 10 2 0 2
// 0 10 1 8
// 5 6 0 16
// 0 8 9 0

// 순서대로 소문자, 대문자, 숫자, 공백의 개수임. 문자열에 해당하는.
// result의 숫자가 무슨숫자인가 의미 파악부터 해야했다.
// isdigit 같은 함수를 찾아야겠다.
//  isNaN() : 숫자인지 체크
// 소문자 대문자 = toUppercase() , toLowercase() 사용??
// 공백은 공백
// \n을 만났을때 한칸 뛰기. 아니면 그냥 넣고 마지막에 split으로 공백기준으로 정렬하고 출력.
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("");
// let N = input
// console.log(N)
// let stack = new Array(4).fill(0)
// // stack = new Array(4).fill(1) 값 재할당 확인
// console.log(stack)
// let answer = ""
// console.log(N[0].toLowerCase())

// 1
// for (let i = 0; i < N.length; i++) {
//     let x = N[i]
//     if (x === x.toLowerCase()&& x !== ' ') {
//         stack[0]++
//     }
//     else if (x === x.toUpperCase() && x !== ' ' ) {
//         stack[1]++
//     }
//     else if (!isNaN(x) && x !== ' ') {
//         stack[2]++
//     }
//     else if (x === ' ') {
//         stack[3]++
//     }
//     else{
//         answer += stack.join(' ') + '\n'
//     }
// }
// console.log(stack)
// console.log(answer)

// input 받을때 띄어쓰기 기준으로 받아내서 배열로 만들고
// 2중 for문을 통해서 값을 꺼내서 비교
// stack도 값꺼내서 비교하는 for문(2번쨰)이 끝나면 answer에 넣고 초기화 시킴
// 비교문이 꼬엿음. 
// 백준에서 답이 계속 틀렸다고 나온다.
// https://www.delftstack.com/ko/howto/javascript/check-if-string-is-number-javascript/
// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");
// // console.log(typeof(input[3][0])) 숫자가 String형으로 들어가져 있다.
// // console.log(input.length)
// let answer = ''
// for (let i = 0; i < input.length; i++) {
//     let stack = new Array(4).fill(0)
//     for (let j = 0; j < input[i].length; j++) {
//         // console.log(input[i][j])
//         const x = input[i][j]
//         // 0을 세질 않음 = parseInt(x)
//         // 공백이 숫자로 들어가짐 = !isNaN(x)
//         if (!isNaN(x) && x !==' ') {
//             stack[2]++
//         } else if (x === ' '){
//             stack[3]++
//         } else if(x === x.toUpperCase()){
//             stack[1]++
//         } else if(x === x.toLowerCase()){
//             stack[0]++
//         } 
//     }
//     // answer.push(stack)
//     answer += stack.join(' ')+'\n';
// }
// console.log(answer.trim())

// console.log(answer.join('\n').replaceAll(',', ' '))
// console.log(`${answer[0]}\n${answer[1]}\n${answer[2]}\n${answer[3]}`)

// answer+=stack.join(' ') + `\n`
// console.log(answer)

// 이쯤 되면 출력 문제가 아닌 내 조건문 문제인거 같다 
// 아스키코드로 판별해보는 조건문을 만들어보자
// 대문자 65-90 소문자 97-122 숫자 48-57
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let answer = ''
for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
        continue
    }
    let stack = new Array(4).fill(0)
    for (let j = 0; j < input[i].length; j++) {
        let x = input[i][j];
        let y = x.charCodeAt()
        
        if (y>=65 && y<=90 ) {
            stack[1]++
        }
        else if (y>=97 && y<=122) {
            stack[0]++
        }
        else if(x === ' '){
            stack[3]++
        }
        else{
            stack[2]++
        }
        // else if (y>=48 && y<=57) {
        //     stack[2]++
        // }
        // else{
        //     stack[3]++
        // }
    }
    answer += `${stack.join(' ')}\n`
}
console.log(answer)

        // if (65<=x.charCodeAt()<=90) {
        //     stack[1]++
        // }else if (97<=x.charCodeAt()<=122) {
        //     stack[0]++
        // }else if (48<= x.charCodeAt()<=57) {
        //     stack[2]++
        // }else{
        //     stack[3]++
        // }
// 이번 문제는 input[i]값이 공백으로 들어오는 경우엔 처리하지 않아야 
// 정답이 나온다는 사실을 깨닫느라 시간을 많이 할애했습니다.
// 문제 자체는 어렵지 않으나, input에 ''값이 들어온 경우,
//  answer에 0 0 0 0이 들어가게서 틀렸다고 채점결과가 나오니 주의하셔야합니다.

        




// replace을 이용한 다른사람 풀이
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

// const t = input.filter(str => str.length < 1)

// if (t.length) {
//   input.splice(input.indexOf(t[0]), 1)
// }

// input.forEach(str => {
//   const lower = str.length - str.replace(/[a-z]/g, '').length
//   const upper = str.length - str.replace(/[A-Z]/g, '').length
//   const num = str.length - str.replace(/[0-9]/g, '').length
//   const blank = str.length - str.replace(/\ /g, '').length

//   console.log(lower, upper, num, blank)
// })