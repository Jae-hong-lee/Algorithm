// ROT13
// https://www.acmicpc.net/problem/11655

// ROT13은 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.
// ROT13은 알파벳 대문자와 소문자에만 적용할 수 있다. 알파벳이 아닌 글자는 원래 글자 그대로 남아 있어야 한다. 

// 아스키 대문자 65~90, 소문자 97~122

// 수도코드
// 아스키 코드로 바꾸고 13을 ++ 해준다. -> (13을 추가했을때 90,122가 넘어가 버린 수 처리는??)
// 넘어가는 숫자는 a로 넘어가야하기 떄문에 -26 (알파벳의 개수만큼)
// 숫자는 그대로 출력하기.
// 이 조건을 다 돌리고 출력은 같이.

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("");
const S = input;
// console.log(S)
let answer = ''
for (let i = 0; i < input.length; i++) {
    if (input[i]===' ' || isNaN(input[i])=== false) {
        answer = answer + input[i]
    }
    let x = input[i].charCodeAt()
    if (x>=65 && x<=90) { // 대문자
        x+=13
        if (x>90) {
            answer = answer+ String.fromCharCode(x-26)
        }
        // answer = answer+ String.fromCharCode(x+13)
        else{answer = answer+ String.fromCharCode(x)}
    }
    else if (x>=97 && x<=122) {
        x+=13
        if (x > 122) {
            answer += String.fromCharCode(x-26)
        }else{
            // answer += String.fromCharCode(x+13)
            answer = answer+ String.fromCharCode(x)
        }
        
    }
}
console.log(answer)