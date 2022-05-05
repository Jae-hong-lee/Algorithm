// ROT13
// https://www.acmicpc.net/problem/11655

// ROT13은 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.
// ROT13은 알파벳 대문자와 소문자에만 적용할 수 있다. 알파벳이 아닌 글자는 원래 글자 그대로 남아 있어야 한다. 

// 아스키 대문자 65~90, 소문자 97~122

// 수도코드
// 아스키 코드로 바꾸고 13을 ++ 해준다. -> (13을 추가했을때 90,122가 넘어가 버린 수 처리는??)
// 숫자는 그대로 출력하기.
// 이 조건을 다 돌리고 출력은 같이.

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const S = input[0];